import '@/App.css';
import { Routes } from '@/routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Providers } from './providers';

function App() {
    const router = createBrowserRouter(Routes);
    return (
        <Providers>
            <RouterProvider router={router} />
        </Providers>
    );
}

export default App;
