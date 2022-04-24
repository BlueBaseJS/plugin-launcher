import { useCallback, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

export const useSize = (): [
	{
		height: number;
		width: number;
	} | null,
	(event: LayoutChangeEvent) => void
] => {
	const [size, setSize] = useState<{
		height: number;
		width: number;
	} | null>(null);

	const onLayout = useCallback((event: LayoutChangeEvent) => {
		const { width, height } = event.nativeEvent.layout;
		setSize({
			width: Math.floor(width),
			height: Math.floor(height)
		});
	}, []);

	return [size, onLayout];
};
