import Todos from '../pages/Todos'
import Id from '../pages/Id'
import Settings from '../pages/Settings'
import {Navigate} from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
	{
		path:'/',
		element:<Todos/>,
	},
    {
        path: '/settings',
        element:<Settings/>
    },
    {
        path: '/id',
        element:<Id/>
    },
	{
		path:'/',
		element:<Navigate to="/"/>
	}
]