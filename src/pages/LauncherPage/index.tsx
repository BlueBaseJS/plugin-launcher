import * as React from 'react';
import BB,{ getComponent } from '@bluebase/core';
import AppGrid from '../../components/AppGrid';

export interface Props {
	match?: {
		isExact?: boolean,
		params?: object,
		path?: string,
		url?: string
	}
}

export const LauncherPage: React.StatelessComponent<Props> = (props: Props) => {
	const View = getComponent('View');

	const ImageBackground = getComponent('ImageBackground');

	const url = BB.Configs.getValue('plugins.launcher.wallpaper');
	return (
		<ImageBackground   {...props}>
			<View>

				<AppGrid />

			</View>
		</ImageBackground>
	);

};