const allMethods = [
	'placement.bind',
	'app.info',
	'placement.get',
	'user.current',
	'department.get',
	'entity.get',
	'entity.section.get',
	'entity.add',
	'entity.section.add',
	'entity.item.add',
	'entity.item.property.add',
	'user.option.get',
	'user.option.set'
];

const checkMethod = ( r ) => {
	if (
		!r.answer.result.isExisting ||
		!r.answer.result.isAvailable
	) {
		throw Error(
			'Метод ' + r.query.data + ' недоступен'
		);
	}
};

export async function checkMethods() {
	return new Promise(( resolve, reject ) => {
		BX24.callBatch(
			allMethods.map(( method ) => [ 'method.get', { name: method } ]),
			( res ) => {
				try {
					res.forEach(checkMethod);
					resolve(true);
				} catch (e) {
					reject(Error(e.message));
				}
			},
			true
		);
	});
}
