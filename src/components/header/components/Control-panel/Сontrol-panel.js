import { Link, useNavigate } from 'react-router-dom'
import logout from '../../../../img/header/logout.png'
import back from '../../../../img/header/back.png'
import newDocument from '../../../../img/header/new.png'
import users from '../../../../img/header/users.png'
import styles from './control-panel.module.css'

export const ControlPanel = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.rightBlock}>
			<div className={styles.login}>
				<Link to="/login" className={styles.loginButton}>
					Войти
				</Link>
			</div>
			<div className={styles.buttons}>
				<button>
					<img src={back} alt="back" onClick={() => navigate(-1)} />
				</button>
				<Link to="/post">
					<img src={newDocument} alt="newDocument" />
				</Link>
				<Link to="/users">
					<img src={users} alt="users" />
				</Link>
			</div>
		</div>
	)
}
