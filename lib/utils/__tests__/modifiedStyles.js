import modifiedStyles from '../modifiedStyles';

const defaultModifierConfig = {
  objectTest: () => ({ styles: 'color: green;' }),
  styleString: () => 'color: blue;',
  themeTest: ({ theme }) => `background-color: ${theme.colors.text};`,
};

const theme = {
  colors: {
    text: 'black',
  },
};

test('returns an empty string with no args', () => {
  expect(modifiedStyles()).toEqual('');
});

test('returns a string with styles when modifier given and config object supplied', () => {
  const styles = modifiedStyles(['objectTest'], defaultModifierConfig, {
    theme,
  });
  expect(styles).toContain('color: green');
});

test('returns a string with styles when modifier given and config string supplied', () => {
  const styles = modifiedStyles(['styleString'], defaultModifierConfig, {
    theme,
  });
  expect(styles).toContain('color: blue');
});

test('returns a string with values from theme', () => {
  const styles = modifiedStyles(['themeTest'], defaultModifierConfig, {
    theme,
  });
  expect(styles).toContain('background-color: black;');
});

test('returns an empty string if modifierName is not in modifierConfig', () => {
  const styles = modifiedStyles(['notFound'], defaultModifierConfig, {
    theme,
  });
  expect(styles).toEqual('');
});
