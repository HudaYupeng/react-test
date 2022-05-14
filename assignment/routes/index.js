import Todos from '../pages/Todos'
import Settings from '../pages/Settings'
import {Navigate} from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
	{
		path:'/',
		element:<Todos/>
	},
    {
        path: '/settings',
        element:<Settings/>
    },
	{
		path:'/',
		element:<Navigate to="/"/>
	}
]