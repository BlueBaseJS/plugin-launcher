import { createPlugin } from '@bluebase/core';

import { DefaultIcon, LauncherScreen } from './components';
import { VERSION } from './version';

export default createPlugin({
	description: 'A plugin that replaces HomeScreen to show Apps just like any mobile OS',
	key: 'plugin-launcher',
	name: 'BlueBase App Launcher',
	version: VERSION,

	components: {
		HomeScreen: LauncherScreen,
		LauncherDefaultIcon: DefaultIcon,
		LauncherScreen,
	},
});
