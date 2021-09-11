const kebabToCamel = (kebab) => (
  kebab.replace(/-(.)/g, (match, s) => s.toUpperCase())
);

export default kebabToCamel;

