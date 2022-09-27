import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
  }));

export default function AddUser() {
   const paperstyel= {padding:'50px 20px',width:600,morgin:"20px auto"}
   const[firstName,setFirstName]= useState('')
   const[lastName,setLastName]= useState('')
   const[email,setEmail]= useState('')
   const[deptId,setDeptId]= useState('')
   
   const[students,setStudents]= useState([])
    const classes = useStyles();
let history=useHistory();

const student={firstName,lastName,email,deptId}

 const handleClick= (e) => {
   e.preventDefault();
   console.log("User Details=",student)
   fetch("http://localhost:8081/catalog/addMethod",{
     method:"POST",
     headers:{"Content-Type":"application/json"},
     body:JSON.stringify(student)

 }).then(()=>{
  history.push("/");
   console.log("New User added Sucessfully!",student)
   
 })
}



  return (
    <Box   component="form">
    <div  className="center" >
        <div ClassName="w-10 mx-auto shadow p-10">
    
<Paper  elevation={1}  style={{   padding: 150,    border: "2px solid black"  }}>

            <h2 className='text-center mb-4'>Add User</h2>

    <form  >
        
        <div className="form-group">
        <input type="test" className="form-control form-control-sg"  required
            placeholder="Enter FirstName" name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}  />
        </div>

        <div className="form-group">
        <input type="test" className="form-control form-control-sg" required
            placeholder="Enter LastName" name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}  />
        </div>

        <div className="form-group">
        <input type="test" className="form-control form-control-sg" required
            placeholder="Enter Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
        </div>




      <button className="btn btn-primary btn-block"  required onClick={handleClick}>  Add User </button>

            
            </form>
            </Paper>
            </div>
      </div>
    
    </Box>
  );
}
