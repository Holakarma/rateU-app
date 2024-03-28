export function saveEmployees(employees) {
    if (employees) {
        localStorage.setItem('employees', JSON.stringify(employees));
    }
    return JSON.parse(localStorage.getItem('employees'));
}
