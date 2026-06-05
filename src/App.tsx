import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import Models from './pages/Models';
import ModelDetail from './pages/ModelDetail';
import Configurator from './pages/Configurator';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'models', element: <Models /> },
      { path: 'models/:slug', element: <ModelDetail /> },
      { path: 'configurator', element: <Configurator /> },
      { path: '*', element: <div className="min-h-screen flex items-center justify-center pt-24"><h1 className="text-h2 font-heading tracking-widest text-velox-silver">PAGE IN DEVELOPMENT</h1></div> }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

