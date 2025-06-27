import React from 'react';
import {roundTo3 } from '../utils/format';

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
    <td className="center">{roundTo3(value)}</td>
    <td className="center">{unit}</td>
  </tr>
);

export default CalculationRow;
