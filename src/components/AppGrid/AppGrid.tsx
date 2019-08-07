import { Container, Row } from '@bluebase/components';

import { AppCard } from '../AppCard';
import { Column } from '../Column';
import { Plugin } from '@bluebase/core';
import React from 'react';

export interface AppGridProps {
	plugins: Plugin[];
}

export const AppGrid = ({ plugins }: AppGridProps) => (
	<Container>
		<Row>
			{plugins.map(plugin => (
				<Column key={plugin.key} xl={1} lg={1.5} md={2} sm={3} xs={3}>
					{size => <AppCard plugin={plugin} size={size} />}
				</Column>
			))}
		</Row>
	</Container>
);
