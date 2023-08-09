export const splitStringArr = (emptyArr: any[] = [], arr: string[]) => {
	let ceiling = 0;
	for (let start = 0; start < arr.length; start++) {
		emptyArr[ceiling] = arr[start];
		if (start % 6 !== 0) {
			ceiling++;
		}
	}
	return emptyArr;
};

export const groupImagesIntoSixArr = (arr: string[]): string[] => {
	const finalArr: any[] = [];
	let j = 0;
	for (let i = 0; i < arr.length; ) {
		finalArr[j] = arr.splice(0, 6);
		j++;
	}
	if (arr.length > 0) {
		finalArr[j] = arr;
	}
	return finalArr;
};
