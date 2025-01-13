import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import Admin from './pages/Admin';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import EnteringOrders from './pages/EnteringOrders';
import SearchingOrders from './pages/SearchingOrders';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <PageNotFound />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'admin',
    element: <Admin />,
  },
  {
    path: 'shop',
    element: <Shop />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'enteringOrders',
    element: <EnteringOrders />,
  },
  {
    path: 'searchingOrders',
    element: <SearchingOrders />,
    children: [
      {
        index: true,
        element: <p>List</p>,
      },
      {
        path: 'cities',
        element: <p>Formularz do wpisania miasta</p>,
      },
      {
        path: 'waste',
        element: <p>Listbox z rodzajami odpadów</p>,
      },
      {
        path: 'company',
        element: <p>Lista dostępnych firm</p>,
      },
    ],
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

