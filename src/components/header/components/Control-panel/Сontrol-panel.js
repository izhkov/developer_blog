import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logoutImg from '../../../../img/header/logout.png'
import back from '../../../../img/header/back.png'
import newDocument from '../../../../img/header/new.png'
import users from '../../../../img/header/users.png'
import { ROLE } from '../../../../constants'
import { selectUserRole, selectUserLogin, selectUserSession } from '../../../../selectors'
import { logout } from '../../../../actions'
import styles from './control-panel.module.css'

export const ControlPanel = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const roleId = useSelector(selectUserRole)
	const login = useSelector(selectUserLogin)
	const session = useSelector(selectUserSession)
	return (
		<div className={styles.rightBlock}>
			<div className={styles.login}>
				{roleId === ROLE.GUEST ? (
					<Link to="/login" className={styles.loginButton}>
						Войти
					</Link>
				) : (
					<div className={styles.logoutBlock}>
						<div>{login}</div>
						<button className={styles.logoutButton}>
							<img
								src={logoutImg}
								alt="logout"
								onClick={() => dispatch(logout(session))}
							/>
						</button>
					</div>
				)}
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
