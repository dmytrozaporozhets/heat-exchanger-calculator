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
  const str =value.toString()
  if (str.includes('e-')) {
    const [mantissa, exponent] = str.split('e-');
    return `${mantissa}⋅10${toSuperscriptExponent('-' + exponent)}`;
  }

  return value.toString();
}

export function formatTrimmedNumber(value: number): string {
  const fixed = value.toFixed(4);
  return fixed.replace(/\.?0+$/, '');
}


