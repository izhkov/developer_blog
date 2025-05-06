import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { server } from '../../bff/server'
import { Navigate } from 'react-router-dom'
import { useResetForm } from '../../hooks'
import { setUser } from '../../actions'
import { selectUserRole } from '../../selectors'
import { ROLE } from '../../constants'
import styles from './registration.module.css'

const regFormSchema = yup.object().shape({
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
	passcheck: yup
		.string()
		.required('Заполните повтор пароля')
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
})

export const Registration = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormSchema),
	})

	const [serverError, setServerError] = useState(null)

	const dispatch = useDispatch()

	const roleId = useSelector(selectUserRole)

	useResetForm(reset)

	const onSubmit = ({ login, password }) => {
		server.register(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`)
				return
			}

			dispatch(setUser(res))
		})
	}

	const formError =
		errors?.login?.message || errors?.password?.message || errors?.passcheck?.message
	const errorMessage = formError || serverError

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />
	}

	return (
		<div className={styles.authContainer}>
			<h2>Регистрация</h2>
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
				<label htmlFor="password">Повтор пароля:</label>
				<input
					type="password"
					{...register('passcheck', {
						onChange: () => setServerError(null),
					})}
				/>
				<button type="submit" disabled={!!formError}>
					Зарегистрироваться
				</button>
				{errorMessage && (
					<div className={styles.errorMessage}>{errorMessage}</div>
				)}
			</form>
		</div>
	)
}
