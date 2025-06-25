// src/components/CalculationTable.tsx

import React from 'react';
import CalculationRow from './CalculationRow';
import './styles/CalculationTable.css';

export interface ParameterDescription {
  key: string;
  label: string;
  unit: string;
}

export interface CalculationResults {
  [key: string]: number | undefined;
}

interface CalculationTableProps {
  title: string;
  parameters: ParameterDescription[];
  results: CalculationResults;
}

const CalculationTable: React.FC<CalculationTableProps> = ({ title, parameters, results }) => {
  const allParamsPresent = parameters.every(p => results[p.key] !== undefined);
  if (!allParamsPresent) return null;

  return (
    <div className="results-container">
      <h2>{title}</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>Параметр</th>
            <th className="center">Обозначение</th>
            <th className="center">Значение</th>
            <th className="center">Единица измерения</th>
          </tr>
        </thead>
        <tbody>
          {parameters.map(({ key, label, unit }) => (
            <CalculationRow
              key={key}
              label={label}
              symbol={key}
              value={results[key]!}
              unit={unit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalculationTable;
