import { AppRoutes } from './routes/routes.js'
import { Header } from './components/header/Header.js'
import { Footer } from './components/footer/Footer.js'
import './css/Blog.css'

const Content = () => <AppRoutes />

export const Blog = () => {
	return (
		<div className="appContainer">
			<Header />
			<Content />
			<Footer />
		</div>
	)
}
