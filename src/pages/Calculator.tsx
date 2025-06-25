import React, { useState } from 'react';
import InputSection from '../components/InputSection';
import DisplaySection from '../components/DisplaySection';
import CalculationTable from '../components/CalculationTable';
import thermalParameters from '../constants/result/thermalParameters';
import { useThermalCalculations } from '../hooks/useThermalCalculations';
import thermalPropsData from '../constants/init/thermalPropsData';
import plateData from '../constants/init/plateData';
import otherData from '../constants/init/otherData';
import { initialData } from '../constants/init/initialData';
import { ThermalInput } from '../types/termal';
import './styles/Calculator.css';

const Calculator: React.FC = () => {
  const [formValues, setFormValues] = useState<ThermalInput>({
    t1_os: 42,
    t2_os: 37,
    t1_ns: 35,
    t2_ns: 38.8,
    Q: 2459000,
    dP_os: 60000,
    dP_ns: 100000,
    X_os: 1,
    X_ns: 1,
  });

  const { results, errors, calculate, clear } = useThermalCalculations();
  const [showResults, setShowResults] = useState(false);

  const handleChange = (key: keyof ThermalInput, value: string) => {
    const numericValue = parseFloat(value);
    setFormValues(prev => ({
      ...prev,
      [key]: isNaN(numericValue) ? 0 : numericValue,
    }));
  };

  const handleCalculate = () => {
    calculate(formValues);
    setShowResults(true);
  };

  const handleClear = () => {
    const clearedValues = initialData.reduce((acc, item) => {
      acc[item.key as keyof ThermalInput] = typeof item.default === 'number' 
        ? item.default 
        : 0;
      return acc;
    }, {} as ThermalInput);
    setFormValues(clearedValues);
    clear();
    setShowResults(false);
  };

  return (
    <div className="calculator-container">
      <h1>Теплогидравлический расчёт</h1>
      <div className="calculator-sections">
        <div className="calculator-row">
          <DisplaySection title="Данные пластины: Р085" data={plateData} />
          <DisplaySection title="Теплофизические свойства воды" data={thermalPropsData} />
        </div>
        <div className="calculator-row">
          <DisplaySection title="Принятые константы" data={otherData} />
          <InputSection
            title="Начальные данные"
            data={initialData}
            values={formValues}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="calculator-actions">
        <div className="buttons-row">
          <button onClick={handleCalculate} className="calculate-button">Рассчитать</button>
          <button onClick={handleClear} className="reset-button">Очистить</button>
        </div>

        {errors.length > 0 && (
          <div className="error-messages">
            {errors.map((err, idx) => (
              <p key={idx} className="error-text">{err}</p>
            ))}
          </div>
        )}

        {showResults && Object.keys(results).length > 0 && (
          <div className="results-section">
            <CalculationTable
              title="Тепловой расчет"
              parameters={thermalParameters}
              results={results}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
