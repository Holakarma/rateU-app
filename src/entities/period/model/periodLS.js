const periodLS = ( refresh = false, period = {
	dateBegin: null,
	dateEnd: null
} ) => {
	if (refresh) {
		localStorage.setItem('period', JSON.stringify(period));
	}
	return JSON.parse(localStorage.getItem('period'));
};

export default periodLS;