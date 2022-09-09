import axios from 'axios';
import React, { Component } from 'react';

class Insert extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // id: this.match.params.id,
            firstName: '', lastName: '', email: '', deptId: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.saveUser = this.saveUser.bind(this);

    }

    onFormSubmit(event) {
        event.preventDefault(); //What is 'preventDefault'
        axios.post('localhost:8081/catalog/addMethod').then(res => console.log('POST User=>',res.data));

        console.log('onFormSubmit : ', this);
    }


    saveUser = (e) => {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            deptId: this.state.deptId
        }
        console.log('User=>' , user);

    }


    render() {
        console.log('SearchBar this.state', this)
        return (




            <div className="ui segment">
                <form onSubmit={(e) => this.onFormSubmit(e)}
                    className="ui form"
                >
                    <div className="form-group">
                        <lable>Last Name:</lable>
                        <input type="text" className="form-control"
                            value={this.state.firstName}
                            onChange={(e) => this.setState({ firstName: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <lable>Last Name:</lable>
                        <input type="text" className="form-control"
                            value={this.state.lastName}
                            onChange={(e) => this.setState({ lastName: e.target.value })} />
                    </div>

                    <div className="form-group">
                        <lable>Email:</lable>
                        <input type="text" className="form-control"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>

                    <div className="form-group">
                        <lable>Department ID:</lable>
                        <input type="text" className="form-control"
                            value={this.state.deptId}
                            onChange={(e) => this.setState({ deptId: e.target.value })} />
                    </div>


                    <div className="form-group">
                        <button className="btn btn-success" onClick={this.saveUser} >Create User</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default Insert;