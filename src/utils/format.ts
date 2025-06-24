export function toSuperscriptExponent(exp: string): string {
  const superscriptMap: Record<string, string> = {
    '0': '⁰',
    '1': '¹',
    '2': '²',
    '3': '³',
    '4': '⁴',
    '5': '⁵',
    '6': '⁶',
    '7': '⁷',
    '8': '⁸',
    '9': '⁹',
    '+': '⁺',
    '-': '⁻',
  };

  return exp.split('').map(ch => superscriptMap[ch] || ch).join('');
}

export function formatScientific(value: number | string): string {
  if (typeof value === 'string' && value.includes('e-')) {
    const [mantissa, exponent] = value.split('e-');
    return `${mantissa}⋅10${toSuperscriptExponent('-' + exponent)}`;
  }

  return value.toString();
}


