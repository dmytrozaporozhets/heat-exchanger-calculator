import React from 'react';
import { formatTrimmedNumber } from '../utils/format';

interface CalculationRowProps {
  label: string;
  symbol: string;
  value: number;
  unit: string;
}

const CalculationRow: React.FC<CalculationRowProps> = ({ label, symbol, value, unit }) => (
  <tr>
    <td>{label}</td>
    <td className="center">{symbol}</td>
    <td className="center">{formatTrimmedNumber(value)}</td>
    <td className="center">{unit}</td>
  </tr>
);

export default CalculationRow;
