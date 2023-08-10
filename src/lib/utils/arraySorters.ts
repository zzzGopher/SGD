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
