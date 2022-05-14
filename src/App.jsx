import React from 'react'
import {NavLink,useRoutes} from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'

export default function App() {
	//根据路由表生成对应的路由规则
	const element = useRoutes(routes)
	return (
		<div>
			<div className="row">
				<Header />
			</div>
			<div className="row">
				<div className="col-xs-6">
					<div className="panel">
						<div className="panel-body">
                            <NavLink className="list-group-item" to="/id">点我跳转到id页面</NavLink>
                            <hr/>
                            <NavLink className="list-group-item" to="/settings">点我修改背景</NavLink>
                            <hr/>
							{/* 注册路由 */}
							{element}
                            <hr/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
