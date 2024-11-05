import React, { type FC } from 'react';
import { Container } from 'src/UI/Container/Container';
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs';
import { Link, Outlet } from 'react-router-dom';
import { PageContent } from 'src/components/page-content/page-content';
import { createBreakpoint } from 'react-use';
import { DisplayBreakpoints } from 'src/helpers/consts';

const useBreakPoint = createBreakpoint({ M: DisplayBreakpoints.Md, S: DisplayBreakpoints.Sm });

export const VideosLayout: FC = () => {
	const breakpoint = useBreakPoint();

	return (
		<>
			<Container>
				<BreadCrumbs
					crumbsLinksMap={[
						{
							title: 'Видеолента',
							link: 'videos',
						},
					]}
				/>
				{breakpoint === 'M' && (
					<PageContent>
						<Outlet />
					</PageContent>
				)}
			</Container>
			{breakpoint !== 'M' && (
					<PageContent $minHeight='auto' $margin='0 0 45px 0'>
						<Outlet />
					</PageContent>
				)}
		</>
	);
};
