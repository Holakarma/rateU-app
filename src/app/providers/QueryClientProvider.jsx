import React from 'react';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const QueryClientProvider = ( { children } ) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
};

export default QueryClientProvider;