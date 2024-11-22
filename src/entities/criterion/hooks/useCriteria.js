import { useEffect, useState } from 'react';
import { getCriteria } from 'utils/getCriteria';

const useCriteria = () => {
	const [ criteria, setCriteria ] = useState();
	const [ isLoading, setLoading ] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			setCriteria(await getCriteria());
			setLoading(false);
		})();
	}, []);

	return { criteria, isLoading };
};

export default useCriteria;