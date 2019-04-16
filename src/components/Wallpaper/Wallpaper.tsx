import { ImageBackground, ImageBackgroundProps, OrientationObserver } from '@bluebase/components';
import React from 'react';

export interface WallpaperProps {
	defaultProps?: ImageBackgroundProps;
	landscapeProps?: ImageBackgroundProps;
	portraitProps?: ImageBackgroundProps;
	children: React.ReactNode;
}
export const Wallpaper: React.ComponentType<WallpaperProps>
= ({ defaultProps, landscapeProps, portraitProps, children }: WallpaperProps) => (
	<OrientationObserver>
		{(isLandscape) => {
			const customProps = isLandscape ? landscapeProps : portraitProps;
			const props: ImageBackgroundProps = { ...defaultProps, ...customProps } as any;

			return props.source ? React.createElement(ImageBackground, props, children) : children;
		}}
	</OrientationObserver>
);