import * as React from 'react';
import AppCard from '../AppCard';
// import { style } from './style';

import { getComponent } from '@bluebase/core';

export type AppType = {
	iconUrl: string,
	name: string,
	slug: string,
	link: string,
};

// get the locally stored image
class SuccessComponent extends React.PureComponent<{ appsList: AppType[] }, { size: number }> {
	constructor(props: { appsList: any[] }) {
		super(props);
		this.state = {
			size: 0
		};
	}
	render() {
		// 	const { appsList } = this.props;
		// 	const WindowInfo = getComponent('WindowInfo');
		// const Row = getComponent('Row');
		const View = getComponent('View');
		// 	const Column = getComponent('Column');
		// 		const container = getComponent('Container');

		const onLayout: any = (all: any) => {
			this.setState({ size: all.nativeEvent.layout.width });
		};


		// const windowSize = windowInfo.window.size === 'xs' || windowInfo.window.size === 'sm';
		// const Container = windowSize ? View : container;
		return (

			<View onLayout={onLayout}>
				<AppCard size={this.state.size}   {...this.props} />
			</View>
			// 			</Column>
			// 		)
			// 		}
			// 	</Row>
			// 	</Container>
		);
	}
}

export default SuccessComponent;