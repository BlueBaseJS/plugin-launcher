import { DynamicIcon, View } from '@bluebase/components';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import React from 'react';
import { Theme } from '@bluebase/core';

export interface DefaultIconStyles {
	iconColor: { color: TextStyle['color'] },
	root: StyleProp<ViewStyle>
}

export interface DefaultIconProps {
	size: number;
	styles?: Partial<DefaultIconStyles>
}

export const DefaultIcon = ({ size, styles: _styles }: DefaultIconProps) => {

	const styles = _styles as DefaultIconStyles;

	return (
		<View style={[styles.root, { height: size, width: size, }]}>
			<DynamicIcon type="icon" name="build" color={styles.iconColor.color} size={size/2} />
		</View>
	);
};

DefaultIcon.defaultStyles = (theme: Theme) => ({
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