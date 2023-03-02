const { substract, multiply, division, power } = require("./calculator");
const calculator = require("./calculator")

test ('Suma de 2 numeros',()=>{
    expect(sum(4, 6)).toBe(10);
});

test ('Resta de 2 numeros',()=>{
    expect(substract(4, 6)).toBe(-2);
});

test ('Multiplicacion de 2 numeros',()=>{
    expect(multiply(4, 6)).toBe(24);
});

test ('Division de 2 numeros',()=>{
    expect(division(4, 6)).toBe();
});

test ('Potencia de 2 numeros',()=>{
    expect(power(4, 6)).toBe(4096);
});

