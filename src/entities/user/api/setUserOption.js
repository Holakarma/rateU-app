import { BX } from 'shared/api';

export const setUserOption = async (options) => {
	try {
		return await BX.callMethod('user.option.set', { options });
	} catch (e) {
		throw Error(e);
	}
};