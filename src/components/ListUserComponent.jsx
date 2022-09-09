import React, { Component } from 'react';
import UserService from '../Services/UserService';
import {  Link} from 'react-router-dom';

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
            <div>
                <h2 className="text-center">User List</h2>


                <div className="row">
                        <Link to={'/insert'} className="nav-link">Insert</Link>
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
        );
    }
}

export default ListUserComponent;