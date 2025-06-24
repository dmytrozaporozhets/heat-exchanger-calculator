import React from 'react';
import './styles/InputRow.css';


interface InputRowProps {
  label: string;
  unit?: string;
  value: number | string;
  onChange: (value: string) => void;
  fieldKey: string;
}

const InputRow: React.FC<InputRowProps> = ({ label, unit, value, fieldKey, onChange }) => {
  return (
    <div className="input-row">
      <div className="input-label">
        {label} <span className="label-key">({fieldKey})</span>
      </div>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-field"
      />
      <div className="input-unit">{unit || '\u00A0'}</div>
    </div>
  );
};

export default InputRow;

