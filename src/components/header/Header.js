import { Logo } from './components/Logo/logo.js'
import { ControlPanel } from './components/Control-panel/Сontrol-panel.js'
import styles from './Header.module.css'

export const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<Logo />
				<div className={styles.centerText}>
					<div>Веб технологии</div>
					<div>Написание кода</div>
					<div>Разбор ошибок</div>
				</div>
				<ControlPanel />
			</header>
		</>
	)
}
