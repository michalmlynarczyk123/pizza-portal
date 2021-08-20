import styles from './Kitchen.module.scss';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


const demoContent = [
  {id: '1', status: 'remote', details: 'margerita', realisation: 'done'},
  {id: '2', status: 'remote', details: '6 x nuggets', realisation: 'done'},
  {id: '3', status: 'local', details: 'latte with apple pie', realisation: 'delivered'},
  {id: '4', status: 'local', details: 'tomato soup', realisation: 'delivered'},
  {id: '5', status: 'local', details: 'steak, potatoes, salad', realisation: 'delivered'},
  {id: '6', status: 'local', details: 'without olives', realisation: 'ordered'},
  {id: '7', status: 'local', details: 'earl grey and brownie', realisation: 'ordered'},
  {id: '8', status: 'remote', details: '6 x nuggets and coca-cola', realisation: 'ordered'},
  {id: '9', status: 'remote', details: 'pepperoni with jalapenio', realisation: 'ordered'},
];

const renderActions = realisation => {
  switch (realisation) {
    case 'ordered':
      return (
        <>
          <Button>In preparation</Button>
          <Button>Done</Button>
        </>
      );
    case 'done':
      return (
        <>
          <Button>Done</Button>
        </>
      );
    case 'delivered':
      return (
        <>
          <Button>Done</Button>
        </>
      );
    default:
      return null;
  }
};

const Kitchen = () => (
  <div className={styles.component}>
    <Container maxWidth='lg' className={styles.table}>
      <Paper >
        <Table>
          <TableHead>
            <TableRow >
              <TableCell align="left" width="50">Number of order</TableCell>
              <TableCell align="left" width="50">Type of order</TableCell>
              <TableCell align="left" width="50">Dishes</TableCell>
              <TableCell align="left" width="50">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="left" width="50">
                  {row.id}
                </TableCell>
                <TableCell align="left" width="50">
                  {row.status}
                </TableCell>
                <TableCell align="left" width="50">
                  {row.details}
                </TableCell>
                <TableCell align="left" width="50">
                  {renderActions(row.realisation)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
    <Toolbar />
    <Toolbar />
    <Toolbar />
    <Toolbar />

  </div>
);

export default Kitchen;