
describe('limpiar_adn', () => {
  test('Elimina valores no canónicos', () => {
    expect(limpiar_adn('CTAGGGTAccc')).toBe('CTAGGGTA');
  });

  test('No hace nada si todos los valores son canónicos', () => {
    expect(limpiar_adn('CTAGGGTA')).toBe('CTAGGGTA');
  });

  test('Devuelve una cadena vacía si la cadena de ADN está vacía', () => {
    expect(limpiar_adn('')).toBe('');
  });

  test('Distinción entre mayúsculas y minúsculas', () => {
    expect(limpiar_adn('ctagGGTA')).toBe('CTAGGTA');
  });
});
