import { Column, Container, Row } from '@bluebase/components';
import { Plugin } from '@bluebase/core';
import React from 'react';

import { AppCard } from '../AppCard';

export interface AppGridProps {
	plugins: Plugin[];
}

export const AppGrid = ({ plugins }: AppGridProps) => {

	return (
		<Container>
			<Row>
				{plugins.map(plugin => (
					<Column
						key={plugin.key}
						xl={1}
						lg={1.5}
						md={2}
						sm={3}
						xs={3}
					>
						<AppCard plugin={plugin} />
					</Column>
				))}
			</Row>
		</Container>
	);
};

AppGrid.displayName = 'AppGrid';
