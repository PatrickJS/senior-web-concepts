const tokens = {
  color: {
    surface: {
      default: { light: '#ffffff', dark: '#111827' },
      muted: { light: '#f3f4f6', dark: '#1f2937' }
    },
    text: {
      default: { light: '#111827', dark: '#f9fafb' },
      danger: { light: '#b91c1c', dark: '#fca5a5' }
    }
  },
  space: {
    inline: {
      sm: { value: '0.5rem' },
      md: { value: '0.75rem' }
    }
  }
};

const flattenTokens = (value, path = []) => {
  if (value && typeof value === 'object' && 'value' in value) {
    return [[path.join('-'), value.value]];
  }

  if (value && typeof value === 'object' && ('light' in value || 'dark' in value)) {
    return [[path.join('-'), value]];
  }

  return Object.entries(value).flatMap(([key, child]) => flattenTokens(child, [...path, key]));
};

const modeValue = (value, mode) => {
  if (typeof value === 'string') return value;
  return value[mode] ?? value.light ?? Object.values(value)[0];
};

const toCssVariables = (source, mode) => {
  const declarations = flattenTokens(source)
    .map(([name, value]) => `  --${name}: ${modeValue(value, mode)};`)
    .join('\n');

  return `:root[data-theme="${mode}"] {\n${declarations}\n}`;
};

console.log(toCssVariables(tokens, 'light'));
console.log('');
console.log(toCssVariables(tokens, 'dark'));
