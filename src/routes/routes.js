import { Routes, Route } from 'react-router-dom'

export const AppRoutes = () => {
	const navigationRoutes = [
		{ path: '/', element: <div>Главная</div> },
		{ path: '/login', element: <div>Авторизация</div> },
		{ path: '/register', element: <div>Регистрация</div> },
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
