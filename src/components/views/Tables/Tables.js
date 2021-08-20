import styles from './Tables.module.scss';
import React from 'react';
import TextField from '@material-ui/core/TextField';
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
  {hour: '13:00', status: 'booked', event: 'reservation' },
  {hour: '13:30', status: 'available', event: 'reservation or event'},
  {hour: '14:00', status: 'available', event: 'reservation or event'},
  {hour: '14:30', status: 'booked', event: 'reservation' },
  {hour: '15:00', status: 'available', event: 'reservation or event'},
  {hour: '15:30', status: 'available', event: 'reservation or event'},
  {hour: '16:00', status: 'booked', event: 'reservation' },
  {hour: '16:30', status: 'booked', event: 'reservation' },
  {hour: '17:00', status: 'available', event: 'reservation or event'},
  {hour: '17:30', status: 'available', event: 'reservation or event'},
  {hour: '18:00', status: 'available', event: 'reservation or event'},
  {hour: '18:30', status: 'available', event: 'reservation or event'},
  {hour: '19:00', status: 'booked', event: 'event' },
  {hour: '19:30', status: 'booked', event: 'event' },
  {hour: '20:00', status: 'booked', event: 'event' },
  {hour: '20:30', status: 'booked', event: 'event' },
];

const renderActions = status => {
  switch (status) {
    case 'booked':
      return (
        <>
          <Button>Reservation</Button>
        </>
      );
    case 'available':
      return (
        <>
          <Button>Reservation</Button>
          <Button>Event</Button>
        </>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <div className={styles.component}>
    <Toolbar />
    <TextField
      id="datetime-local"
      label="Choose date and hour"
      type="datetime-local"
      defaultValue="2017-05-24T10:30"
      className={styles.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
    <Toolbar />
    <Container maxWhourth='lg' className={styles.table}>
      <Paper >
        <Table>
          <TableHead>
            <TableRow >
              <TableCell align="left" whourth="50">Hour</TableCell>
              <TableCell align="left" whourth="50">Table 1</TableCell>
              <TableCell align="left" whourth="50">Status</TableCell>
              <TableCell align="left" whourth="50">Table 2</TableCell>
              <TableCell align="left" whourth="50">Status</TableCell>
              <TableCell align="left" whourth="50">Table 3</TableCell>
              <TableCell align="left" whourth="50">Status</TableCell>
              <TableCell align="left" whourth="50">Table 4</TableCell>
              <TableCell align="left" whourth="50">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.hour}>
                <TableCell component="th" scope="row" align="left" whourth="50">
                  {row.hour}
                </TableCell>
                <TableCell align="left" whourth="50">
                  {row.status}
                </TableCell>
                <TableCell align="left" whourth="50">
                  {renderActions(row.status)}
                </TableCell>
                <TableCell align="left" whourth="50">
                  {row.status}
                </TableCell>
                <TableCell align="left" whourth="50">
                  {renderActions(row.status)}
                </TableCell>
                <TableCell align="left" whourth="50">
                  {row.status}
                </TableCell>
                <TableCell align="left" whourth="50">
                  {renderActions(row.status)}
                </TableCell>
                <TableCell align="left" whourth="50">
                  {row.status}
                </TableCell>
                <TableCell align="left" whourth="50">
                  {renderActions(row.status)}
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

export default Tables;