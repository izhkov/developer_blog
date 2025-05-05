import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { server } from '../../bff/server'
import { Link } from 'react-router-dom'
import { setUser } from '../../actions'
import styles from './authorization.module.css'

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допустимые символы буквы и цифры')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/[\w#%]+$/,
			'Неверно заполнен пароль. Допускаются буквы, цифры, знаки # %',
		)
		.min(6, 'Неверно заполнен пароль. Минимум 6 символов')
		.max(20, 'Неверно заполнен пароль. Максимум 20 символов'),
})

export const Authorization = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	})

	const [serverError, setServerError] = useState(null)

	const dispatch = useDispatch()

	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`)
				return
			}

			dispatch(setUser(res))
		})
	}

	const formError = errors?.login?.message || errors?.password?.message
	const errorMessage = formError || serverError

	return (
		<div className={styles.authContainer}>
			<h2>Авторизация</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="login">Логин:</label>
				<input
					type="text"
					{...register('login', {
						onChange: () => setServerError(null),
					})}
				/>
				<label htmlFor="password">Пароль:</label>
				<input
					type="password"
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
				<button type="submit" disabled={!!formError}>
					Авторизоваться
				</button>
				{errorMessage && (
					<div className={styles.errorMessage}>{errorMessage}</div>
				)}
				<div className={styles.registerBlock}>
					<Link to="/register" className={styles.loginButton}>
						Зарегистрироваться
					</Link>
				</div>
			</form>
		</div>
	)
}
