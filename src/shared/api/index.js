export class BX {
	callMethod = ( method, params ) => new Promise(( resolve, reject ) => {
		BX24.callMethod(method, params, ( result ) => {
			if (result.error()) {
				reject(res.error().ex.error_description);
				return;
			}
			resolve(result);
		});
	});
}