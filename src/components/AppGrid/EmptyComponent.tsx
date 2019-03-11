import * as React from 'react';
import { style } from './style';
import { getComponent } from '@bluebase/core';

const emptyComponent = () => {
	const title = 'No Apps Installed';
	const View = getComponent('View');
	const ComponentState = getComponent('ComponentState');


	return (
		<>
			{ComponentState ?
				<View style={style.noAppView}>
					<ComponentState
						titleStyle={style.noAppTitle}
						imageSource={''}
						imageStyle={style.noAppImage}
						title={title}
					/>
				</View>
				: null}
		</>
	);
};

export default emptyComponent;