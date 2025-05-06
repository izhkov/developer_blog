import { Authorization } from '../pages/authorization/authorization'
import { Registration } from '../pages/registration/registration'
import { Routes, Route } from 'react-router-dom'

export const AppRoutes = () => {
	const navigationRoutes = [
		{ path: '/', element: <div>Главная</div> },
		{ path: '/login', element: <Authorization /> },
		{ path: '/register', element: <Registration /> },
		{ path: '/users', element: <div>Пользователи</div> },
		{ path: '/post', element: <div>Новая статья</div> },
		{ path: '/post:postId', element: <div>Статья</div> },
		{ path: '*', element: <div>Ошибка</div> },
	]
	return (
		<Routes>
			{navigationRoutes.map((route) => (
				<Route key={route.path} path={route.path} element={route.element}></Route>
			))}
		</Routes>
	)
}
