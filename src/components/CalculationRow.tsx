import React from 'react';
import { formatTrimmedNumber } from '../utils/format';

interface CalculationRowProps {
  label: string;
  symbol: string;
  value: number;
}

const CalculationRow: React.FC<CalculationRowProps> = ({ label, symbol, value }) => (
  <tr>
    <td>{label}</td>
    <td className="center">{symbol}</td>
    <td className="center">{formatTrimmedNumber(value)}</td>
  </tr>
);

export default CalculationRow;
