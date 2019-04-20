import { BlueBase, BlueBaseContext, getComponent, Theme } from '@bluebase/core';
import { AppGrid } from '../AppGrid';
import React from 'react';
import { ScrollView, StyleProp, ViewStyle } from 'react-native';
import { View } from '@bluebase/components';
import { Wallpaper } from '../Wallpaper';

const EmptyState = getComponent('LauncherEmptyState', 'EmptyState');

export interface LauncherScreenStyles {
	root: StyleProp<ViewStyle>;
}

export interface LauncherScreenProps {
	styles: LauncherScreenStyles;
}

export class LauncherScreen extends React.PureComponent<LauncherScreenProps, { size: number }> {

	static contextType = BlueBaseContext;

	static defaultStyles = (theme: Theme) => ({
		root: {
			flex: 1,
			paddingHorizontal: theme.spacing.unit * 2,
		}
	})

	render() {

		const BB: BlueBase = this.context;

		const { styles } = this.props;

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
				<ScrollView style={styles.root}>
					<AppGrid plugins={plugins} />
				</ScrollView>
			</Wallpaper>
		);
	}
}
