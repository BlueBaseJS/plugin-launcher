import { Column as Col, ColumnProps as ColProps } from '@bluebase/components';
import { BlueBaseContext } from '@bluebase/core';
import React from 'react';

export interface ColumnProps extends ColProps {
	children: (size: number) => React.ReactNode
}

export class Column extends React.PureComponent<ColumnProps, { size: number }> {

	static contextType = BlueBaseContext;
	readonly state = {
		size: 0
	};

	constructor(props: ColumnProps) {
		super(props);

    // This binding is necessary to make `this` work in the callback
		this.onLayout = this.onLayout.bind(this);
	}

	onLayout (event: any) {

		const width = parseFloat(event.nativeEvent.layout.width);

		if (this.state.size !== width) {
			this.setState({ size: width });
		}
	}

	render() {

		const { children, ...rest } = this.props;
		const size = this.state.size;

		return (
			<Col onLayout={this.onLayout} {...rest}>
			{size === 0 ? null : children(size)}
			</Col>
		);
	}
}