

const getAppList = (BB: any) => {
	const AppsJSON: any = BB.Plugins.getRouteMap();


	// empty array initialized
	const appsList: any[] = [];
	// pushes required objects in the array with required attributes only
	Object.keys(AppsJSON).map(each => {
		if (!AppsJSON[each].hidden) {
			const eachObject = AppsJSON[each];
			appsList.push({
				name: eachObject.name,
				link: eachObject.path,
				key: eachObject.key
			});
		}
	});
	return appsList;
};

export default getAppList;