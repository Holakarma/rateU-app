export function saveEmployees(employees) {
    if (employees) {
        localStorage.setItem('employees', JSON.stringify(employees));
    }
    return JSON.parse(localStorage.getItem('employees'));
}



export function saveRates(rates) {
    if (rates) {
        localStorage.setItem('rates', JSON.stringify(rates));
    }
    return JSON.parse(localStorage.getItem('rates'));
}
