import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home';
import CreateData from './CreateData';
import UpdataData from './UpdataData';
import View from './View';
import DeleteUser from './DeleteUser';
import Data from './Data';
let r=createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: 'createData',
                element: <CreateData/>
            }, {
                path: 'Data',
                element: <Data/>
            },{
                path: 'updateData/:userId',
                element: <UpdataData/>
            },{
                path: 'deleteUser',
                element: <DeleteUser/>
            },{
                path:'view/:userId',
                element: <View/>
            }
        ]
    }
])
const App = () => {
  return (
    <RouterProvider router={r}></RouterProvider>
  )
}

export default App