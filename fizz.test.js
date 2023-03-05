
describe('fizzBuzz', () => {
    test('Devuelve Fizz si el número es divisible por 3', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
      expect(fizzBuzz(9)).toBe('Fizz');
    });
  
    test('Devuelve Buzz si el número es divisible por 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
      expect(fizzBuzz(20)).toBe('Buzz');
    });
  
    test('Devuelve FizzBuzz si el número es divisible por 3 y 5', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
      expect(fizzBuzz(30)).toBe('FizzBuzz');
    });
  
    test('Devuelve el número si no es divisible por 3 ni por 5', () => {
      expect(fizzBuzz(2)).toBe(2);
      expect(fizzBuzz(7)).toBe(7);
    });
  });