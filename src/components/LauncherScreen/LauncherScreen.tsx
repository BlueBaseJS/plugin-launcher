import { BlueBaseImageBackground, EmptyState, View } from '@bluebase/components';
import { Plugin, Theme, useBlueBase, useStyles } from '@bluebase/core';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleProp, ViewStyle } from 'react-native';

import { AppGrid } from '../AppGrid';

export interface LauncherScreenStyles {
	root: StyleProp<ViewStyle>;
}

export interface LauncherScreenProps {
	styles?: LauncherScreenStyles;
}

export interface LauncherScreenState {
	plugins: Plugin[];
}

const defaultStyles = (theme: Theme) => ({
	root: {
		flex: 1,
		paddingHorizontal: theme.spacing.unit * 2,
	},
});

export const LauncherScreen = (props: LauncherScreenProps) => {

	const styles = useStyles('LauncherScreen', props, defaultStyles);

	const BB = useBlueBase();
	const [plugins, setPlugins] = useState<Plugin[]>([]);

	useEffect(() => {
		async function loadPlugins() {
			const enabledPlugins = await BB.Plugins.getAllEnabled();
			const plugins = enabledPlugins.filter(p => !!p.indexRoute);
			setPlugins(plugins);
		}

		loadPlugins();
	}, []);

	if (!plugins || plugins.length === 0) {
		return (
			<View testID="view" style={styles.root}>
				<EmptyState />
			</View>
		);
	}

	return (
		<BlueBaseImageBackground
			style={{ flex: 1 }}
			resizeMode="contain"
			source="launcher"
		>
			<ScrollView style={styles.root}>
				<AppGrid plugins={plugins} />
			</ScrollView>
		</BlueBaseImageBackground>
	);
};

LauncherScreen.displayName = 'LauncherScreen';
