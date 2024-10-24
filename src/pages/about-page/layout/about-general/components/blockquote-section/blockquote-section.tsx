import { type FC } from 'react'

import styles from './index.module.scss'

export const BlockquoteSection: FC = () => {
	return (
		<section className={styles.blockquote}>
			<div className={styles.blockquoteImg}>
				<img
					src='https://vmeste-rf.tv/upload/resize_cache/iblock/1f1/1040_585_2/ulufg7ee6bgst3luzv7o4f0lg4gg3dpu.jpg'
					alt='Атманов Угол'
				/>
			</div>

			<blockquote>
				<p className={styles.blockquoteText}>
					Nam interdum, tellus nec fringilla commodo, lacus velit posuere turpis, dignissim
					convallis purus erat non erat. Vestibulum ante ipsum primis in faucibus orci luctus et
					ultrices posuere cubilia curae; Vestibulum molestie risus vitae nulla fermentum luctus.
					Pellentesque quis nulla ut ligula condimentum accumsan id vitae risus. In rutrum
					ullamcorper mollis.
				</p>
				<p className={styles.blockquoteText}>
					Curabitur sit amet eros nec erat volutpat posuere. Orci varius natoque penatibus et magnis
					dis parturient montes, nascetur ridiculus mus. Sed vel aliquet est.
				</p>

				<footer>А.С. Тедорадзе, должность в Федерации Этноспорта России</footer>
			</blockquote>
		</section>
	)
}
