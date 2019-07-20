import { Body2, NavigationActions, PluginIcon, TouchableItem, View } from '@bluebase/components';
import { Plugin, PluginRegistryItem, getComponent } from '@bluebase/core';

import React from 'react';

const DefaultIcon = getComponent('LauncherDefaultIcon');

export interface AppCardProps {
	plugin: Plugin;
	size: number;
}

export const AppCard = ({ plugin, size }: AppCardProps) => (
	<NavigationActions>
		{({ navigate }) => {
			const onPress = () => navigate(plugin.indexRoute!);

			return (
				<TouchableItem onPress={onPress}>
					<View style={{ alignItems: 'center', marginVertical: 8 }}>
						<View style={{ height: size, width: size }}>
							{!!plugin.icon ? (
								<PluginIcon id={plugin.key} size={size} />
							) : (
								<DefaultIcon size={size} />
							)}
						</View>
						<Body2 style={{ paddingTop: 8 }} ellipsizeMode="tail" numberOfLines={1}>
							{plugin.name}
						</Body2>
					</View>
				</TouchableItem>
			);
		}}
	</NavigationActions>
);
