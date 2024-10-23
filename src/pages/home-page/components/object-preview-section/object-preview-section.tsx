import cn from 'classnames'
import { Container } from 'src/UI/Container/Container'

import styles from './index.module.scss'
import { useGetObjectByIdQuery } from 'src/store/objects/objects.api'
import { Heptagon } from 'src/UI/Heptagon/Heptagon'

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
						<Heptagon $imgUrl={object.logo} $margin='0 0 37px 0' />
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
