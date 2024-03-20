import React from 'react';
import { RatesContext } from '../../../utils/ratesContext';
import { getRates } from '../../../utils/saveRatesToEntity';

export function SaveRatesBtn() {
    const { rates, setRates } = React.useContext(RatesContext);
    async function save() {
        await getRates(rates)
    }
    return <button className="btn btn-success" onClick={save}>Сохранить оценки</button>;
}
