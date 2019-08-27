import App1 from '../../src/demo/apps/app1';
import App2 from '../../src/demo/apps/app2';
import App3 from '../../src/demo/apps/app3';
import App4 from '../../src/demo/apps/app4';
import App5 from '../../src/demo/apps/app5';
import { MaterialIcons } from '@bluebase/plugin-vector-icons';
import Plugin from '../../src';
import ResponsiveGrid from '@bluebase/plugin-responsive-grid';


export default {
	configs: {
		landscapeProps: {
			resizeMode: 'contain',
			source: require('../../assets/web/wallpaper.png'),
			style: { flex: 1, },
		},
		portraitProps: {
			resizeMode: 'contain',
			source: require('../../assets/expo/wallpaper.jpg'),
			style: { flex: 1, },
		},
	},
	plugins: [
		App1,
		App2,
		App3,
		App4,
		App5,

		Plugin,
		MaterialIcons,
		ResponsiveGrid,
	]
};
