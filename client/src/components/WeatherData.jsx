import React, {useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function WeatherData(){

    useEffect(() => {
    fetch('/API/Weather')
    .then(res => res.json())
    .then(data => console.log({data})
    )
    .catch(err => {
        console.log(err);
     });	
    }, []); /*empty array ensures code only runs once */


 return (
    <div className="container">
   <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Time</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                  <TableCell></TableCell>
              </TableRow>
          </TableBody>
          </Table>
          </TableContainer>
    </div>
 )
}

export default WeatherData;