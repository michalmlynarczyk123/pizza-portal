import styles from './Dashboard.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


const demoContent = [
  {id: '12', status: 'remote'},
  {id: '25', status: 'local'},
];

const renderActions = status => {
  switch (status) {
    case 'remote':
      return (
        <>
          <Button>Ordered</Button>
          <Button>Ready</Button>
          <Button>In delivery</Button>
          <Button>Done</Button>
        </>
      );
    case 'local':
      return (
        <>
          <Button>Ordered</Button>
          <Button>Ready</Button>
          <Button>Delivered</Button>
        </>
      );
    default:
      return null;
  }
};

const demoContentofList = [
  {id: '1', status: 'delivered', name: 'Pizza and salad' },
  {id: '2', status: 'done', name: '2 x pizza'},
  {id: '3', status: 'delivered', name: 'Steak with potatoes'},
  {id: '4', status: 'delivered', name: 'Spagheti Carbonara'},
];

const Dashboard = () => (
  <div className={styles.component}>
    <Container maxWidth='lg' className={styles.table}>
      <Paper >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Number of order</TableCell>
              <TableCell>Type of order</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
                <TableCell>
                  {renderActions(row.status)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
    <Toolbar />
    <Container maxWidth='lg' className={styles.table}>
      <Paper >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Number of order</TableCell>
              <TableCell>Status of order</TableCell>
              <TableCell>Dishes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContentofList.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
                <TableCell>
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
    <Toolbar />
    <Card className={styles.card}>
      <CardActionArea >
        <CardMedia />
        <CardContent>
          <Typography gutterBottom variant="h5" component={Link} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Toolbar />
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component={Link} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Toolbar />
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia />
        <CardContent>
          <Typography gutterBottom variant="h5" component={Link} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
);

export default Dashboard;