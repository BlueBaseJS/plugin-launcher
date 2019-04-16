import { BlueBase, BlueBaseContext, getComponent } from '@bluebase/core';
import { SafeAreaView, ScrollView } from 'react-native';
import { AppGrid } from '../AppGrid';
import React from 'react';
import { View } from '@bluebase/components';
import { Wallpaper } from '../Wallpaper';

const EmptyState = getComponent('LauncherEmptyState', 'EmptyState');

export class LauncherScreen extends React.PureComponent<{}, { size: number }> {

	static contextType = BlueBaseContext;

	render() {

		const BB: BlueBase = this.context;

		const plugins = Array.from(BB.Plugins.values()).filter(plugin => !!plugin.path);

		if (!plugins || plugins.length === 0) {
			return (
				<View style={{ flex: 1 }}>
					<EmptyState />
				</View>
			);
		}

		return (
			<Wallpaper
				portraitProps={BB.Configs.getValue('plugin.launcher.wallpaper.portrait')}
				landscapeProps={BB.Configs.getValue('plugin.launcher.wallpaper.landscape')}
				defaultProps={BB.Configs.getValue('plugin.launcher.wallpaper')}
			>
				<SafeAreaView>
					<ScrollView>
						<AppGrid plugins={plugins} />
					</ScrollView>
				</SafeAreaView>
			</Wallpaper>
		);
	}
}
