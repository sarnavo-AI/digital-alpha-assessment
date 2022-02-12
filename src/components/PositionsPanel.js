import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import '../assets/PositionsPanel.css';

function createData(transaction, type, amount, balance) {
    return { transaction, type, amount, balance};
  }
  
  const rows = [
    createData('Netflix', 'Debit', 1200, 23455),
    createData('Movie Ticket', 'Debit', 125, 23455 - 125),
    createData('Salary', 'Credit', 75000, 23455 - 125 + 75000),
    createData('Furnitures', 'Debit', 20000, 23455 - 125 + 75000 - 20000),
    createData('Electronics', "Debit", 5000, 23455 - 125 + 75000 - 20000 - 5000),
  ];

const assignSign = (type, amount) => {
    if(type === 'Debit') {
        return (
            <span style={{color: "red"}}>-{amount}</span>
        )
    }
    else {
        return (
            <span style={{color: "green"}}>+{amount}</span>
        )
    }
}

function PositionsPanel() {
  return (
    <div className='transaction-table'>
        <h3>Transactions Table</h3>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">Transactions</TableCell>
                    <TableCell align="center">Credit/Debit</TableCell>
                    <TableCell align="center">Amount&nbsp; ($)</TableCell>
                    <TableCell align="center">Balance&nbsp;($)</TableCell>
                    {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.transaction}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row" align="center">
                        {row.transaction}
                    </TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{assignSign(row.type, row.amount)}</TableCell>
                    <TableCell align="center">{row.balance}</TableCell>
                    {/* <TableCell align="right">{row.protein}</TableCell> */}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default PositionsPanel