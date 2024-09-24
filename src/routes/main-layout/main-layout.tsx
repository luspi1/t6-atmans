import { type FC } from 'react'

import { Outlet } from 'react-router-dom'
import { MainNavigation } from 'src/components/main-navigation/main-navigation'
import { Footer } from 'src/components/footer/footer'

export const MainLayout: FC = () => {
	return (
		<>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
