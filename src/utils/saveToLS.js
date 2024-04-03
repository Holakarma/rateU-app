export function saveEmployees(employees) {
    if (employees) {
        localStorage.setItem('employees', JSON.stringify(employees));
    }
    return JSON.parse(localStorage.getItem('employees'));
}

export function savePeriod(refresh = false, period = {dateBegin: null, dateEnd: null}) {
    if (refresh) {
        localStorage.setItem('period', JSON.stringify(period));
    }
    return JSON.parse(localStorage.getItem('period'));
}

export function saveRates(rates) {
    if (rates) {
        localStorage.setItem('rates', JSON.stringify(rates));
    }
    return JSON.parse(localStorage.getItem('rates'));
}
