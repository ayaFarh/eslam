import { useState } from 'react';
import './App.css';
import Home from './Pages/home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // استيراد createBrowserRouter

function App() {
  const [count, setCount] = useState(0);

  // تعريف الروترات
  const router = createBrowserRouter([
    { path: "/", element: <Home /> }
  ]);

  return (
    <>
    
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
