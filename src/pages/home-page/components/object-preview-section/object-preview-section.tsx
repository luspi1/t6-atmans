import cn from 'classnames'
import { Container } from 'src/UI/Container/Container'
import { useGetObjectByIdQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'

export const ObjectPreviewSection = () => {
	const { data: object } = useGetObjectByIdQuery('1')
	if (!object) return
	return (
		<section className={cn(styles.objectPreviewSection, '_bordered')}>
			<Container>
				<div className={styles.objPreview}>
					<div className={styles.objLocation}>
						<iframe src={object.location} width='100%' height='100%' loading='eager'></iframe>
					</div>
					<div className={styles.objInfo}>
						<img className={styles.objLogo} src={object.logo} alt={object.title} />
						<h6>{object.title}</h6>
						<p className={styles.objAddress}>
							<span>{object.title}</span>
							<span>{object.address}</span>
						</p>
						<p className={styles.objDesc}>{object.mainDesc}</p>
					</div>
				</div>
			</Container>
		</section>
	)
}
