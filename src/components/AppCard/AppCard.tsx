import * as React from 'react';
import { style } from './style';
import { getComponent } from '@bluebase/core';

export interface AppCardProperties {
	name?: string,
	link?: string,
	slug?: string,
	size?: number,
}

const AppCard = (props: AppCardProperties) => {

	const Link = getComponent('Link');
	const View = getComponent('View');
	const Body2 = getComponent('Body2');
	const DynamicComponents = getComponent('DynamicComponents');


	const { name, link, size, slug } = props;
	return (

		<Link
			to={link}
			style={style.link}
		>
			<View>
				{
					slug ? <DynamicComponents {...props} /> : null}
				<Body2
					style={{ width: size, ...style.appNameStyle }}
				>
					{name}
				</Body2>
			</View>
		</Link>

	);

};

export default AppCard;
