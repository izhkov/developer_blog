import logo from '../../img/header/logo.png'
import logout from '../../img/header/logout.png'
import back from '../../img/header/back.png'
import newDocument from '../../img/header/new.png'
import users from '../../img/header/users.png'
import styles from './Header.module.css'

export const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.headerLogo}>
					<img src={logo} alt="logo" />
					<div className={styles.headerText}>
						<span>Блог</span>
						<br />
						<div>веб-разработчика</div>
					</div>
				</div>
				<div className={styles.centerText}>
					<div>Веб технологии</div>
					<div>Написание кода</div>
					<div>Разбор ошибок</div>
				</div>
				<div className={styles.rightBlock}>
					<div className={styles.login}>
						<div>izhkov</div>
						<a href="">
							<img src={logout} alt="logout" />
						</a>
					</div>
					<div className={styles.buttons}>
						<a href="#">
							<img src={back} alt="back" />
						</a>
						<a href="#">
							<img src={newDocument} alt="newDocument" />
						</a>
						<a href="#">
							<img src={users} alt="users" />
						</a>
					</div>
				</div>
			</header>
		</>
	)
}
