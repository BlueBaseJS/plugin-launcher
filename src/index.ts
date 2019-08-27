import { DefaultIcon, LauncherScreen } from './components';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	description: 'A plugin that replaces HomeScreen to show Apps just like any mobile OS',
	key: 'plugin-launcher',
	name: 'BlueBase App Launcher',
	version: '1.0.0',

	components: {
		HomeScreen: LauncherScreen,
		LauncherDefaultIcon: DefaultIcon,
		LauncherScreen,
	},

	defaultConfigs: {
		'plugin.launcher.wallpaper': {},
		'plugin.launcher.wallpaper.landscape': {},
		'plugin.launcher.wallpaper.portrait': {},
	},
});
