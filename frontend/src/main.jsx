import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import PrivateRoute from './elements/PrivateRoute.jsx';

import Landing from './screens/Landing.jsx';
import GetStarted from './screens/GetStarted.jsx';
import Register from './screens/Register.jsx';
import Dashboard from './screens/Dashboard.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Landing />} />
      <Route path='/login' element={<GetStarted />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Dashboard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);

/*<Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<Dashboard />}/>
        </Route>*/