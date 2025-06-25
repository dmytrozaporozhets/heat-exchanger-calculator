import React from 'react';
import InputRow from '../components/InputRow';
import './styles/InputSection.css';

interface InputItem {
  key: string;
  label: string;
  unit?: string;
}

interface InputSectionProps {
  title: string;
  data: InputItem[];
  values: Record<string, string | number>;
  onChange: (key: string, value: string) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ title, data, values, onChange }) => {
  return (
    <section className='section-init-container'>
      <h3>{title}</h3>
      {data.map(({ key, label, unit }) => (
        <InputRow
          fieldKey={key}
          label={label}
          unit={unit}
          value={values[key]}
          onChange={(value: string) => onChange(key, value)}
        />
      ))}
    </section>
  );
};

export default InputSection;
