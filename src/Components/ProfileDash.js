import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetCurrentUserInformation } from "../firebaseService"
import { useState , useEffect } from 'react';
 
function ProfileDash(props) {
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        GetCurrentUserInformation().then((user) =>{
          setUserInfo(user);
          
          }
        );
      },[]);

      

    

  return (
  <>
  
  </>
  );
}

export default ProfileDash;