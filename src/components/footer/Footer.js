import styles from './Footer.module.css'

export const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.footerText}>
					<div>Блог веб-разработчика</div>
					<div>web@developer.com</div>
				</div>
			</footer>
		</>
	)
}
