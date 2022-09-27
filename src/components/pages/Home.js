import React,{useState,useEffect} from 'react';
import axios from  'axios';
import { Paper } from '@material-ui/core';
import {  Link, useParams } from 'react-router-dom';

const Home =()=> {
    const[users, setUuser]= useState([]);
    //const {id} = useParams();
   // const {id} = useParams();
    const {id} = useParams();



    
    useEffect( () =>{
        loadUsers();
        console.log('Hello useEffect');
    },[]);

    const loadUsers= async () =>{
        const result= await axios.get("http://localhost:8081/catalog/getCataLog");
        setUuser(result.data.reverse());
        console.log("Result_Home=",result);
    };



    const deleteUser = async id =>{
    const res= await axios.delete("http://localhost:8081/catalog/CataLogUser/"+id);
    loadUsers();
    console.log("ResultDelete=",res);
    };
    

    return (
        <div className="container">
           
             <Paper  elevation={100}  style={{   padding:'35px 90px 100px 100px',morgin:"100px"  }}>
        <div>
            <h2 className="text-center">User List</h2>

            <div className="text-center">

                <table className="table boarder shadow ">
                    <thead >
                        <tr>
                        <th scope="col">S.No#</th>
                        <th scope="col">User Id</th>
                            <th scope="col">User FirstName</th>
                            <th scope="col">User LastName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map( (user,index) =>
                                    <tr>
                                        <th scope='row'>{index+1}</th>
                                        <td>{user.userId}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        
                                        <td>
                                            <Link className='btn btn-primary mr-2' to={`/users/view/${user.userId}`}>View</Link>
                                            <Link className='btn btn-outline-primary mr-2' to={`/users/edit/${user.userId}`}>Edit</Link>
                                            <Link className='btn btn-outline-primary mr-2' onClick={() => deleteUser(user.userId)}>Delete</Link>
                                            

                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>


        </div>
        </Paper>
        </div>
    );
    };


export default Home;