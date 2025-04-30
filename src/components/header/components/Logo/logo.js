import { Link } from 'react-router-dom'
import logo from '../../../../img/header/logo.png'
import styles from '../../components/Logo/logo.module.css'

export const Logo = () => {
	return (
		<Link className={styles.headerLogo} to="/">
			<img src={logo} alt="logo" />
			<div className={styles.headerText}>
				<span>Блог</span>
				<br />
				<div>веб-разработчика</div>
			</div>
		</Link>
	)
}
