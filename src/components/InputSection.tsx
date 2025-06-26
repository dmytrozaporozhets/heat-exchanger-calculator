import React from 'react';
import InputRow from '../components/InputRow';
import './styles/InputSection.css';
import { CalculationInput } from '../types/general';

interface InputItem {
  key: keyof CalculationInput; 
  label: string;
  unit?: string;
}

interface InputSectionProps {
  title: string;
  data: InputItem[];
  values: Partial<CalculationInput>; 
  onChange: (key: keyof CalculationInput, value: string) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ title, data, values, onChange }) => {
  return (
    <section className="section-init-container">
      <h3>{title}</h3>
      {data.map(({ key, label, unit }) => (
        <InputRow
          key={key}
          fieldKey={key}
          label={label}
          unit={unit}
          value={values[key] ?? ''} 
          onChange={(value: string) => onChange(key, value)}
        />
      ))}
    </section>
  );
};

export default InputSection;
