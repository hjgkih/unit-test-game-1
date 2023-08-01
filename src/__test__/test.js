import healthStatus from '../healthAppiarance';

test('first test', () => {
  const result = 4;
  expect(result).toBe(4);
});

test('health appearance critical test', () => {
  const person = {
    name: 'Petya',
    health: 10,
  };

  const result = healthStatus(person);
  expect(result).toBe('critical');
});

test('health appearance wounded test', () => {
  const person = {
    name: 'Igor',
    health: 40,
  };

  const result = healthStatus(person);
  expect(result).toBe('wounded');
});

test('health appearance healthy test', () => {
  const person = {
    name: 'Stas',
    health: 100,
  };

  const result = healthStatus(person);
  expect(result).toBe('healthy');
});
