import { Body2, PluginIcon, TouchableItem, View } from '@bluebase/components';
import {
	getComponent,
	Plugin,
	useIntl,
	useNavigation,
	useTheme
} from '@bluebase/core';
import React, { useCallback } from 'react';

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

	return (
		<TouchableItem onPress={onPress}>
			<View style={{ alignItems: 'center', padding: theme.spacing.unit }}>
				<View style={{ height: size, width: size }}>
					{plugin.icon ? (
						<PluginIcon id={plugin.key} size={size} />
					) : (
						<DefaultIcon size={size} />
					)}
				</View>
				<Body2 style={{ paddingTop: theme.spacing.unit }} ellipsizeMode="tail" numberOfLines={1}>
					{__(plugin.name)}
				</Body2>
			</View>
		</TouchableItem>
	);
};

AppCard.displayName = 'AppCard';
