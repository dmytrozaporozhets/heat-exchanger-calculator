import React from 'react';
import InputRow from '../components/InputRow';
import './styles/InputSection.css';
import { ThermalInput } from '../types/termal';

interface InputItem {
  key: keyof ThermalInput; 
  label: string;
  unit?: string;
}

interface InputSectionProps {
  title: string;
  data: InputItem[];
  values: Partial<ThermalInput>; 
  onChange: (key: keyof ThermalInput, value: string) => void;
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
