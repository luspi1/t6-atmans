import { type FC } from 'react'

import styles from './index.module.scss'

export const BlockquoteSection: FC = () => {
	return (
		<section className={styles.blockquote}>
			<div className={styles.blockquoteImg}>
				<img
					src='https://s0.bloknottambov.ru/thumb/850x0xcut/upload/iblock/965/1e45k21exoxsxxtpq3kt73ej8giexulo/Predsedatel-federatsii-etnosporta-Rossii_-osnovatel-_Atmanovskikh-kulachek_-Anatoliy-Tedoradze-otmechaet-den-rozhdeniya.jpg'
					alt='А.С. Тедорадзе, должность в Федерации Этноспорта России'
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
