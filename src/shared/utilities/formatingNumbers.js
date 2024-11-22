export function formatNumber(number) {
    number += "";
    return number.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
}