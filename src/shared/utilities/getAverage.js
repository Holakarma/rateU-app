const getAverage = ( numbers ) => numbers.reduce(( acc, number ) => acc + number, 0) / numbers.length;

export default getAverage;