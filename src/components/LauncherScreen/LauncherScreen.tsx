import { BlueBase, BlueBaseContext, Plugin, Theme, getComponent } from '@bluebase/core';
import { ScrollView, StyleProp, ViewStyle } from 'react-native';

import { AppGrid } from '../AppGrid';
import React from 'react';
import { View } from '@bluebase/components';
import { Wallpaper } from '../Wallpaper';

const EmptyState = getComponent('LauncherEmptyState', 'EmptyState');

export interface LauncherScreenStyles {
	root: StyleProp<ViewStyle>;
}

export interface LauncherScreenProps {
	styles?: LauncherScreenStyles;
}

export interface LauncherScreenState {
	plugins: Plugin[];
}

export class LauncherScreen extends React.PureComponent<LauncherScreenProps, LauncherScreenState> {
	static contextType = BlueBaseContext;

	readonly state: LauncherScreenState = {
		plugins: [],
	};

	static defaultStyles = (theme: Theme) => ({
		root: {
			flex: 1,
			paddingHorizontal: theme.spacing.unit * 2,
		},
	})

	async componentWillMount() {
		const BB: BlueBase = this.context;
		const enabledPlugins = await BB.Plugins.getAllEnabled();
		const plugins = enabledPlugins.filter(p => !!p.indexRoute);

		this.setState({ plugins });
	}

	render() {
		const BB: BlueBase = this.context;
		const { styles } = this.props;
		const { plugins } = this.state;

		if (!plugins || plugins.length === 0) {
			return (
				<View testID="view" style={{ flex: 1 }}>
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
				<ScrollView style={styles!.root}>
					<AppGrid plugins={plugins} />
				</ScrollView>
			</Wallpaper>
		);
	}
}
