import React, { type FC, useRef, useState } from 'react'
import { type ImageItem } from 'src/types/photos'
import ImageGallery from 'react-image-gallery'
import cn from 'classnames'

import { mainFormatDate } from 'src/helpers/utils'
import { CustomFullscreenIcon } from 'src/UI/icons/customFullscreenIcon'

import { LimitArrowTop } from 'src/UI/icons/limitArrowTop'
import { LimitArrowDown } from 'src/UI/icons/limitArrowDown'
import 'react-image-gallery/styles/css/image-gallery.css'
import styles from './index.module.scss'

type ImageGalleryProps = {
	className?: string
	images?: ImageItem[]
	limit?: number
	limitController?: boolean
}

export const GalleryImg: FC<ImageGalleryProps> = ({
	className,
	images,
	limit,
	limitController,
}) => {
	const [expandedGallery, setExpandedGallery] = useState<boolean>(false)

	const [isFullscreenHidden, setIsFullscreenHidden] = useState<boolean>(true)
	const galleryRef = useRef<ImageGallery>(null)

	const openFullscreen = (index: number) => {
		if (galleryRef.current) {
			galleryRef.current.slideToIndex(index)
			galleryRef.current.fullScreen()
			setIsFullscreenHidden(false)
		}
	}

	const renderFullscreenButton = (
		onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
	) => (
		<button
			type='button'
			className={cn('image-gallery-fullscreen-button', styles.customFsBtn)}
			onClick={onClick}
			aria-label='Fullscreen'
		>
			<CustomFullscreenIcon />
		</button>
	)

	if (!images?.length) return null

	return (
		<div className={className}>
			<ul className={styles.gridGallery}>
				{images.slice(0, expandedGallery ? images.length : limit).map((img, idx) => (
					<li key={img.id} onClick={() => openFullscreen(idx)}>
						<div className={styles.gridImgWrapper}>
							<img src={img.thumbnail} alt={`image ${idx + 1}`} />
						</div>
						<h6>{img?.title}</h6>
						{img.date && <span className={styles.imgDate}>{mainFormatDate(img.date)}</span>}
					</li>
				))}
			</ul>
			<ImageGallery
				ref={galleryRef}
				renderFullscreenButton={renderFullscreenButton}
				showFullscreenButton={true}
				showPlayButton={false}
				additionalClass={cn(styles.imageGallery, { [styles.fullscreenHidden]: isFullscreenHidden })}
				items={images}
				onScreenChange={(isFullscreen) => !isFullscreen && setIsFullscreenHidden(true)}
			/>
			{limitController && limit && limit < images.length && (
				<button
					className={styles.limitController}
					type='button'
					onClick={() => setExpandedGallery(!expandedGallery)}
				>
					{expandedGallery ? (
						<>
							Скрыть
							<LimitArrowTop />
						</>
					) : (
						<>
							Показать еще {images.length - limit} фото
							<LimitArrowDown />
						</>
					)}
				</button>
			)}
		</div>
	)
}
