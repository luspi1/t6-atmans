import { type FC } from 'react'

import { useGetEventByIdQuery } from 'src/store/events/events.api'
import { Placement } from 'src/modules/placement/placement'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'

import styles from './index.module.scss'

export const ContactsInfo: FC = () => {
	const { data: contactsInfo } = useGetEventByIdQuery('1')
	const breakpoint = useBreakPoint()
	return (
		<>
			<div className={styles.contactsBlock}>
				<h4>Почтовый адрес</h4>
				<p>119019, Тамбовская область, Сосновский округ, с. Атманов угол, ул. Ленина, 4/2</p>
			</div>

			<div className={styles.contactsBlock}>
				<h4>Телефон</h4>
				<p>Демидов Артём Геннадьевич, заведующий библиотекой</p>
				<a href='tel:csvoopik@mail.ru'>+7 (495) 695-07-06</a>
			</div>

			<div className={styles.contactsBlock}>
				<h4>Электронная почта</h4>
				<a href='mailto:mail@mail.ru'>mail@mail.ru</a>
			</div>
			{breakpoint === 'M' && <Placement placeVariants={contactsInfo?.pathways} title='Маршруты' />}
		</>
	)
}
