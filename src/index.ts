
import { createPlugin } from '@bluebase/core';
import { LauncherPage } from './pages/LauncherPage';
export default createPlugin({

	key: 'LauncherPlugin',
	name: 'launcher-plugin',

	components: {
		'IndexPage': LauncherPage,

	},
	defaultConfigs: {
		'plugins.launcher.wallpaper': ''
	},
});

