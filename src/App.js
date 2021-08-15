import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Login from './components/views/Login/Login';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />

          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/ordering/:id'} component={Tables}>
            <Tables>
              <p>123abc</p>
            </Tables>
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/tables/ordering/new'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={Tables}>
            <Tables>
              <p>123abc</p>
            </Tables>
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={Tables} />

          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Waiter}>
            <Waiter>
              <p>123abc</p>
            </Waiter>
          </Route>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
