import { Column, Container, Row } from '@bluebase/components';
import { Plugin } from '@bluebase/core';
import React from 'react';

import { useSize } from '../../useSize';
import { AppCard } from '../AppCard';

export interface AppGridProps {
	plugins: Plugin[];
}

export const AppGrid = ({ plugins }: AppGridProps) => {
	const [size, onLayout] = useSize();

	return (
		<Container>
			<Row>
				{plugins.map(plugin => (
					<Column
						key={plugin.key}
						onLayout={onLayout}
						xl={1}
						lg={1.5}
						md={2}
						sm={3}
						xs={3}
					>
						{size ? <AppCard plugin={plugin} size={size.width} /> : null}
					</Column>
				))}
			</Row>
		</Container>
	);
};

AppGrid.displayName = 'AppGrid';
