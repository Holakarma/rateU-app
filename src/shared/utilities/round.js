const round = ( number, precision = 0 ) => Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);

export default round;