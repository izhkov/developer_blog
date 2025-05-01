import { useEffect, useState } from 'react'
import styles from './Footer.module.css'

export const Footer = () => {
	const [city, setCity] = useState('')
	const [temp, setTemp] = useState('')
	const [weather, setWeather] = useState('')

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Ekaterinburg&lang=ru&units=metric&appid=ea043a9c5425d18336b24a88169f0bd6',
		)
			.then((response) => response.json())
			.then(({ name, main, weather }) => {
				setCity(name)
				setTemp(Math.round(main.temp))
				setWeather(weather[0].description)
			})
	}, [])
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.footerText}>
					<div>Блог веб-разработчика</div>
					<div>web@developer.com</div>
				</div>
				<div className={styles.weatherBlock}>
					<div>
						{city}{' '}
						{city
							? new Date().toLocaleString('ru', {
									day: 'numeric',
									month: 'long',
								})
							: ''}
					</div>
					<div>
						{temp > 0 ? <span>+{temp}</span> : temp} {temp ? '.' : ''}{' '}
						{weather.charAt(0).toUpperCase() + weather.slice(1)}
					</div>
				</div>
			</footer>
		</>
	)
}
