// Calculator.tsx
import React, { useState } from 'react';
import { 
  c_os, ν_os, ρ_os, λ_os, 
  c_ns, ν_ns, ρ_ns, λ_ns, 
  c_st, ν_st, ρ_st, λ_st,
  w_os, w_ns, d_e,
  A_os, A_ns,
  n3_os, n3_ns,
  n1_os, n1_ns,
  C_ns, C_os,
  n2_ns, n2_os,
  k_st, k_gr
} from '../constants/values';
import InputSection from '../components/InputSection';
import DisplaySection from '../components/DisplaySection';
import ThermalCalculationsTable from '../components/ThermalCalculationsTable';
import { initialData, otherData, plateData, thermalPropsData } from '../constants/initialData';
import {
  dt_b, dt_m, dt_sr_1, t_os_sr, t_ns_sr, t_st,
  Pr_os, Pr_ns, Pr_st,
  Re_os, Re_ns,
  zeta_os, zeta_ns,
  Nu_os, Nu_ns,
  alpha_os, alpha_ns,
  k_ch, k_total,
  w_os_1, w_ns_1,
  zp
} from '../utils/thermalCalculations';
import './styles/Calculator.css';

const Calculator: React.FC = () => {
  const [formValues, setFormValues] = useState<Record<string, string | number>>(
    initialData.reduce((acc, item) => ({
      ...acc,
      [item.key]: item.default ?? '',
    }), {})
  );

  const [results, setResults] = useState<any>({});
  const [showResults, setShowResults] = useState(false);

  const handleChange = (key: string, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCalculate = () => {
    const t1_os = parseFloat(formValues.t1_os as string);
    const t2_os = parseFloat(formValues.t2_os as string);
    const t1_ns = parseFloat(formValues.t1_ns as string);
    const t2_ns = parseFloat(formValues.t2_ns as string);

    const Q = parseFloat(formValues.Q as string);
    const dP_os = parseFloat(formValues.dP_os as string);
    const dP_ns = parseFloat(formValues.dP_ns as string);
    const X_os = parseFloat(formValues.X_os as string);
    const X_ns = parseFloat(formValues.X_ns as string);

    if ([t1_os, t2_os, t1_ns, t2_ns, Q, dP_os, dP_ns, X_os, X_ns].some(v => isNaN(v))) {
      alert('Пожалуйста, введите все необходимые температурные значения.');
      return;
    }

    const dtb = dt_b(t1_os, t2_ns);
    const dtm = dt_m(t2_os, t1_ns);
    const dtsr = dt_sr_1(dtb, dtm);

    const tos_sr = t_os_sr(t1_os, t2_os);
    const tns_sr = t_ns_sr(t1_ns, t2_ns);
    const tst_val = t_st(tos_sr, tns_sr);

    const pr_os_val = Pr_os(c_os, ν_os, ρ_os, λ_os);
    const pr_ns_val = Pr_ns(c_ns, ν_ns, ρ_ns, λ_ns);
    const pr_st_val = Pr_st(c_st, ν_st, ρ_st, λ_st);

    const re_os_val = Re_os(w_os, d_e, ν_os);
    const re_ns_val = Re_ns(w_ns, d_e, ν_ns);

    const zeta_os_val = zeta_os(A_os, re_os_val, n3_os);
    const zeta_ns_val = zeta_ns(A_ns, re_ns_val, n3_ns);

    const nu_os_val = Nu_os(C_os, re_os_val, n1_os, n2_os, pr_os_val, pr_st_val);
    const nu_ns_val = Nu_ns(C_ns, re_ns_val, n1_ns, n2_ns, pr_ns_val, pr_st_val);

    const alpha_os_val = alpha_os(nu_os_val, λ_os, d_e);
    const alpha_ns_val = alpha_ns(nu_ns_val, λ_ns, d_e);

    const kch = k_ch(alpha_os_val, k_st, alpha_ns_val);
    const k = k_total(alpha_os_val, k_st, k_gr, alpha_ns_val);

    const w_os1 = w_os_1(k, dtsr, dP_os, c_os, t1_os, t2_os,ρ_os, zeta_os_val);
    const w_ns1 = w_ns_1(k, dtsr, dP_ns, c_ns, t2_ns, t1_ns,ρ_ns, zeta_ns_val);

    const zp_val =zp(kch,k)

    setResults({
      dt_b: dtb,
      dt_m: dtm,
      dt_sr_1: dtsr,
      t_os_sr: tos_sr,
      t_ns_sr: tns_sr,
      t_st: tst_val,
      Pr_os: pr_os_val,
      Pr_ns: pr_ns_val,
      Pr_st: pr_st_val,
      Re_os: re_os_val,
      Re_ns: re_ns_val,
      zeta_os: zeta_os_val,
      zeta_ns: zeta_ns_val,
      Nu_os: nu_os_val,
      Nu_ns: nu_ns_val,
      alpha_os: alpha_os_val,
      alpha_ns: alpha_ns_val,
      k_ch: kch,
      k: k,
      w_os_1: w_os1,
      w_ns_1: w_ns1,
      zp:zp_val
    });

    setShowResults(true);
  };

  const onClear = () => {
    setFormValues(initialData.reduce((acc, item) => ({
      ...acc,
      [item.key]: item.default ?? '',
    }), {}));
    setResults({});
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
          <button onClick={onClear} className="reset-button">Очистить</button>
        </div>
        {showResults && (
          <div className="results-section">
            <ThermalCalculationsTable results={results} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
