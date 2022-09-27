import React,{useState,useEffect} from 'react';
import axios from  'axios';
import { Paper } from '@material-ui/core';
import {  Link, useParams } from 'react-router-dom';


const ViewUser =()=> {
    const[users, setUser]= useState([]);
    //const {userId} = useParams();
   // const {userId} = useParams();
    //const {id} = useParams();

 
const {id} = useParams();


    
    useEffect( () =>{
        loadUsers();
        console.log('Hello useEffect');
    },[]);


    const loadUsers = async id =>{
    const result=  await axios.get("http://localhost:8081/catalog/getCataLog/"+id);
    setUser(result.data);
     console.log("ResultView=",result.data);
}



    
    return (
        <div className="container">
             <Paper  elevation={100}  style={{   padding:'35px 90px 100px 100px',morgin:"100px"  }}>
             <Link className="btn btn-primary" to="/"> Back to Home </Link>

        <div>
            <h2 className="text-center">User View</h2>

            <div className="text-center">

                <table className="table boarder shadow ">
                    <thead >
                        <tr>
                        <th scope="col">S.No#</th>
                            <th scope="col">User FirstName</th>
                            <th scope="col">User LastName</th>
                            <th scope="col">Email</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map( (user,index) =>
                            <tr key={user.userId}>
                                        <th scope='row'>{index+1}</th>
                                        
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
        </div>
    );
    };


export default ViewUser;