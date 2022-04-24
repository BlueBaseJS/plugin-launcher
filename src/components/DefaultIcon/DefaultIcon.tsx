import { DynamicIcon, View } from '@bluebase/components';
import { Theme, useStyles } from '@bluebase/core';
import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface DefaultIconStyles {
	iconColor: { color: TextStyle['color'] },
	root: StyleProp<ViewStyle>
}

export interface DefaultIconProps {
	size: number;
	styles?: Partial<DefaultIconStyles>
}

const defaultStyles = (theme: Theme): DefaultIconStyles => ({
	iconColor: {
		color: theme.palette.primary.main
	},
	root: {
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,.12)',
		borderRadius: 10,
		justifyContent: 'center',
	},
});

export const DefaultIcon = (props: DefaultIconProps) => {
	const { size } = props;
	const styles = useStyles('LauncherDefaultIcon', props, defaultStyles);

	return (
		<View style={[styles.root, { height: size, width: size, }]}>
			<DynamicIcon type="icon" name="build" color={styles.iconColor.color} size={size/2} />
		</View>
	);
};

DefaultIcon.displayName = 'DefaultIcon';
