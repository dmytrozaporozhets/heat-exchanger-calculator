import React, { useState } from 'react';
import InputSection from '../components/InputSection';
import DisplaySection from '../components/DisplaySection';
import { initialData, plateData, thermalPropsData } from '../constants/initialData';
import './styles/Calculator.css';

const Calculator: React.FC = () => {
  const [formValues, setFormValues] = useState<Record<string, string | number>>(
    initialData.reduce((acc, item) => ({ ...acc, [item.key]: '' }), {})
  );

  const handleChange = (key: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="calculator-container">
      <h1>Теплогидравлический расчёт</h1>
      <div className="calculator-sections">
        <div className="calculator-row" >
          <DisplaySection title="Данные пластины: Р085" data={plateData} />
          <DisplaySection title="Теплофизические свойства воды" data={thermalPropsData} />
        </div>
        <InputSection
          title="Начальные данные"
          data={initialData}
          values={formValues}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Calculator;
