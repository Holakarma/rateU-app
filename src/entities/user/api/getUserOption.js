import { BX } from 'shared/api';

export const getUserOption = async () => {
	try {
		return await BX.callMethod('user.option.get');
	} catch (e) {
		throw Error(e);
	}
};