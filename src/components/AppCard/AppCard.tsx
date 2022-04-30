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

const DefaultIcon = getComponent('LauncherDefaultIcon');

export interface AppCardProps {
	plugin: Plugin;
	size: number;
}

export const AppCard = ({ plugin, size }: AppCardProps) => {

	const { __ } = useIntl();
	const { theme } = useTheme();
	const { navigate } = useNavigation();

	const onPress = useCallback(() => navigate(plugin.indexRoute!), [plugin]);

	if (!size) {
		return null;
	}

	// Becaues of padding in the parent view
	const iconSize = size - (theme.spacing.unit * 2);

	return (
		<Pressable onPress={onPress}>
			<View style={{
				alignItems: 'center',
				paddingHorizontal: theme.spacing.unit,
				paddingVertical: theme.spacing.unit * 2,
				width: size,
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
		</Pressable>
	);
};

AppCard.displayName = 'AppCard';
