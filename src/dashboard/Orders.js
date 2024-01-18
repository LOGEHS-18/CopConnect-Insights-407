import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, place, mobilenumber, solvedin) {
  return { id, date, name,place,mobilenumber,solvedin};
}

const rows = [
  createData(
    0,
    '16 Mar, 2021',
    'Rape',
    'jahalwar',
    '78xxxxxx10',
    30,
  ),
  createData(
    1,
    '18 May,2018',
    'Criminal',
    'Bihar',
    '67xxxxxx45',
     45,
  ),
  createData(2, '09 Jun, 2005', 'Evidence', 'Rajastan', '45xxxxxx40', 10),
  createData(
    3,
    '21 september,2005',
    'Murder',
    'Punjab',
    '87xxxxxx20',
    50,
    ),
  createData(
    4,
    '15 Mar, 2019',
    'Fir',
    'Rajastan',
    '96xxxx5919',
    21,
    ),
    createData(5, '04 mar, 2012', 'victim  ', 'Rajastan', '75xxxxxx48', 30),
    createData(6, '14 may, 2017', 'criminal  ', 'Rajastan', '96xxxxxx67', 40),
    createData(7, '30 jun, 2014', 'rape  ', 'Rajastan', '83xxxxxx45', 85),
    createData(8, '24 oct, 2014', 'murder  ', 'Rajastan', '82xxxxxx33', 12),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <h3>
        <Title>Solved Cases</Title>
        </h3>
      <Table size="small" sx={{fontFamily:'fantasy'}}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Type of case</TableCell>
            <TableCell>place</TableCell>
            <TableCell>solved in days</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.place}</TableCell>
              <TableCell>{row.solvedin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Cases
      </Link>
    </React.Fragment>
  );
}
