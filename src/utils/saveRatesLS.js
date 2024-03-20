export function saveRates(rates) {
    if (rates) {
        localStorage.setItem('rates', JSON.stringify(rates));
    }
    return JSON.parse(localStorage.getItem('rates'));
}
