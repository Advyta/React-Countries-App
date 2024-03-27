import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { fetchCountries } from './features/contriesSlice';
import { RouterProvider, Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import DetailsPage from './Pages/Details/DetailsPage';
import Layout from './Pages/Layout';
import NotFoundPage from './Pages/NotFoundPage';

store.dispatch(fetchCountries());
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element={<HomePage/>}/>
      <Route path='DetailsPage/:countryName' element={<DetailsPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>
  )
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
