import * as React from 'react';
import BB, { getComponent } from '@bluebase/core';
import SuccessComponent from './SuccessComponent';
import emptyComponent from './EmptyComponent';
import getAppList from '../../helpers/getAppList';

class AppGrid extends React.PureComponent<any, {}>{


	render() {
		const StatefulComponent = getComponent('StatefulComponent');
		const appsList = getAppList(BB);
		const statefulProps = {
			data: () => appsList.length > 0,
			emptyComponent,
			isEmpty: () => appsList.length === 0,
			isLoading: () => false
		};
		// Gets Applist
		return (
			<StatefulComponent {...statefulProps} >
				<SuccessComponent appsList={appsList} />
			</StatefulComponent>
		);
	}
}

export default AppGrid;