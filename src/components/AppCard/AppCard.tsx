import { Body2, NavigationActions, PluginIcon, TouchableItem, View } from '@bluebase/components';
import { PluginRegistryItem, getComponent } from '@bluebase/core';
import React from 'react';

const DefaultIcon = getComponent('LauncherDefaultIcon');

export interface AppCardProps {
	plugin: PluginRegistryItem,
	size: number,
}

export const AppCard = ({ plugin, size }: AppCardProps) => (
	<NavigationActions>
		{({ push }) => {

			const path = plugin.path;
			const onPress = path ? (() => push({ path })) : undefined;

			return (
				<TouchableItem onPress={onPress}>
					<View style={{ alignItems: 'center', marginVertical: 8 }}>
						<View style={{ height: size, width: size }}>
						{
							!!plugin.icon
							? <PluginIcon id={plugin.key} size={size} />
							: <DefaultIcon size={size} />
						}
						</View>
						<Body2 style={{ paddingTop: 8 }} ellipsizeMode="tail" numberOfLines={1}>{plugin.name}</Body2>
					</View>
				</TouchableItem>
			);
		}}
	</NavigationActions>
);