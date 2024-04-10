import React from 'react';
import { Providers } from './components/Providers/Providers';
import { ErrorFallBack } from './components/ErrorFallback/ErrorFallback';
import { ErrorContext } from './utils/errorContext';

// BX24.callMethod('entity.delete', {ENTITY: 'rates'}, res => {console.log(res)})

export function App() {
    const [error, setError] = React.useState(undefined);

    return (
        <ErrorContext.Provider value={setError}>
            {error ? <ErrorFallBack error={error} /> : <Providers />}
        </ErrorContext.Provider>
    );
}
