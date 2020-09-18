import encriptMessage from './encriptMessage'

test('Encripts messages based on the rotation given', () => {
  expect(encriptMessage('Hello World', 13)).toBe('Uryyb Jbeyq');
  expect(encriptMessage('The Number 16.', 13)).toBe('Gur Ahzore 16.');
  expect(encriptMessage('Hello World!', 19)).toBe('Axeeh Phkew!');
});