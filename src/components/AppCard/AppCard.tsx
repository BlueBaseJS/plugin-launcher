import { Body2, PluginIcon, View } from '@bluebase/components';
import {
	getComponent,
	Plugin,
	useIntl,
	useNavigation,
	useTheme
} from '@bluebase/core';
import React, { useCallback } from 'react';
import { Pressable } from 'react-native';

import { useSize } from '../../useSize';

const DefaultIcon = getComponent('LauncherDefaultIcon');

export interface AppCardProps {
	plugin: Plugin;
}

export const AppCard = ({ plugin }: AppCardProps) => {

	const { __ } = useIntl();
	const { theme } = useTheme();
	const { navigate } = useNavigation();

	const [size, onLayout] = useSize();

	const onPress = useCallback(() => navigate(plugin.indexRoute!), [plugin]);

	// Becaues of padding in the parent view
	const iconSize = size ? size.width - (theme.spacing.unit * 2) : 0;

	return (
		<Pressable onPress={onPress}>
			<View onLayout={onLayout}>
				<View
					style={{
						alignItems: 'center',
						paddingHorizontal: theme.spacing.unit,
						paddingVertical: theme.spacing.unit * 2,
						width: size?.width,
					}}
				>
					<View style={{ height: iconSize, width: iconSize }}>
						{plugin.icon ? (
							<PluginIcon id={plugin.key} size={iconSize} />
						) : (
							<DefaultIcon size={size} />
						)}
					</View>
					<Body2 style={{ paddingTop: theme.spacing.unit }} ellipsizeMode="tail" numberOfLines={1}>
						{__(plugin.name)}
					</Body2>
				</View>
			</View>
		</Pressable>
	);
};

AppCard.displayName = 'AppCard';
