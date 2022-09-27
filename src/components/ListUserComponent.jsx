import React, { Component } from 'react';
import UserService from '../Services/UserService';
import {  Link} from 'react-router-dom';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }

        this.handleClick = this.handleClick.bind(this);
        

    }
    componentDidMount() {
        UserService.getUserDetails().then((res) => {
            this.setState({ users: res.data });
            console.log("*********************=", res.data);

        });
    }


    handleClick(e) {
        this.props.history.push("/postuser");
        console.log(this.props);
    }
 

    render() {
        return (
            <Container>
                 <Paper  elevation={12}  style={{   padding:'50px 20px',width:1000,morgin:"20px",        border: "1px solid black"  }}>
            <div>
                <h2 className="text-center">User List</h2>


                <div className="row">
                        <Link to={'/Create'} className="nav-link">Add</Link>
                </div>
               


                <div className="row">

                    <table className="table table-striped table-hover ">
                        <thead >
                            <tr>
                                <th scope="col">User FirstName</th>
                                <th scope="col">User LastName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.userId}>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>


            </div>
            </Paper>
            </Container>
        );
    }
}

export default ListUserComponent;