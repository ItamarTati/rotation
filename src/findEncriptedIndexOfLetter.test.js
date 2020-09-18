import findEncriptedIndexOfLetter from './findEncriptedIndexOfLetter'

test('Finds the new letter with changing numbers or punctionation', () => {
    expect(findEncriptedIndexOfLetter('H', 13)).toBe('U');
    expect(findEncriptedIndexOfLetter('6', 13)).toBe('6');
    expect(findEncriptedIndexOfLetter('.', 13)).toBe('.');
    expect(findEncriptedIndexOfLetter('e', 13)).toBe('r');
    expect(findEncriptedIndexOfLetter('d', 19)).toBe('w');
    expect(findEncriptedIndexOfLetter('W', 19)).toBe('P');
    expect(findEncriptedIndexOfLetter('!', 19)).toBe('!');

  });