export function incrementIndexID(i: number) {
	let j;
	switch (i) {
		case 0:
			j = 1;
			break;
		case 1:
			j = 2;
			break;
		case 2:
			j = 3;
			break;
		default:
			j = 1;
	}
	return j;
}
