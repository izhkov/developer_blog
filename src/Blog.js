import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppRoutes } from './routes/routes.js'
import './css/Blog.css'

const Header = () => <div>Шапка</div>
const Content = () => <AppRoutes />
const Footer = () => <div>Футер</div>

export const Blog = () => {
	return (
		<>
			<Header />
			<Content></Content>
			<Footer />
		</>
	)
}
