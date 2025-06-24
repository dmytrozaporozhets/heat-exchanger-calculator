import React from 'react';
import './styles/DisplaySection.css';
import { formatScientific } from '../utils/format';

interface DisplayItem {
  key: string;
  label: string;
  unit?: string;
  value: number | string;
  isScientific?:boolean
}


interface DisplaySectionProps {
  title: string;
  data: DisplayItem[];
}

const DisplaySection: React.FC<DisplaySectionProps> = ({ title, data }) => {

  return (
    <section className="section-container">
      <h3>{title}</h3>
      {data.map(({ key, label, unit, value}) => {
      const display = formatScientific(value);
      return (
        <div key={key} className="input-row">
          <div className="input-label">
            {label} <span className="label-key">({key})</span>
          </div>
          <div className="display-value">{display}</div>
          <div className="input-unit">{unit || '\u00A0'}</div>
        </div>
      );
    })}
    </section>
  );
};

export default DisplaySection;
