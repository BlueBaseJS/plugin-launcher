import { BlueBaseContext, PluginRegistryItem } from '@bluebase/core';
import { Column, Container, Row } from '@bluebase/components';
import { AppCard } from '../AppCard';
import React from 'react';

export interface AppGridProps {
	plugins: PluginRegistryItem[]
}

export class AppGrid extends React.PureComponent<AppGridProps, { size: number }> {

	static contextType = BlueBaseContext;
	readonly state = {
		size: 0
	};

	render() {

		const { plugins } = this.props;
		const size = this.state.size;

		const onLayout: any = (all: any) => {
			this.setState({ size: all.nativeEvent.layout.width });
		};

		return (
			<Container>
				<Row>
				{plugins.map(plugin => (
					<Column key={plugin.key} xl={1} lg={1.5} md={2} sm={3} xs={3} onLayout={onLayout}>
						{size > 0 ? <AppCard plugin={plugin} size={size} /> : null}
					</Column>
				))}
				</Row>
			</Container>
		);
	}
}