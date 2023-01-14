function orbitalPeriod(arr) {
    const T = function (a) {
        const GM = 398600.4418;
        const earthRadius = 6367.4447;
        return Math.round(2 * Math.PI * Math.sqrt(Math.pow(a + earthRadius, 3) / GM));
    };
    return arr.map(b => {
        return {
            name: b.name,
            orbitalPeriod: T(b.avgAlt)
        }
    })
};

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));