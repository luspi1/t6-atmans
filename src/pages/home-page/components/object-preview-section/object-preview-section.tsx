import cn from 'classnames'
import { Container } from 'src/UI/Container/Container'
import { useGetHomePreviewObjectQuery } from 'src/store/home/home.api'

import styles from './index.module.scss'

export const ObjectPreviewSection = () => {
	const { data: previewObject } = useGetHomePreviewObjectQuery(null)
	if (!previewObject) return
	return (
		<section className={cn(styles.objectPreviewSection, '_bordered')}>
			<Container>
				<div className={styles.objPreview}>
					<div className={styles.objLocation}>
						<iframe
							src={previewObject.location}
							width='100%'
							height='100%'
							loading='eager'
						></iframe>
					</div>
					<div className={styles.objInfo}>
						<img className={styles.objLogo} src={previewObject.logo} alt={previewObject.title} />
						<h6>{previewObject.title}</h6>
						<p className={styles.objAddress}>
							<span>{previewObject.title}</span>
							<span>{previewObject.address}</span>
						</p>
						<p className={styles.objDesc}>{previewObject.mainDesc}</p>
					</div>
				</div>
			</Container>
		</section>
	)
}
