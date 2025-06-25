import React from 'react';
import './styles/ThermalCalculationsTable.css';
import CalculationRow from './CalculationRow';

interface ThermalResults {
  dt_b?: number;
  dt_m?: number;
  dt_sr_1?: number;
  t_os_sr?: number;
  t_ns_sr?: number;
  t_st?: number;
  Pr_os?: number;
  Pr_ns?: number;
  Pr_st?: number;
  Re_os?: number;
  Re_ns?: number;
  zeta_os?: number;
  zeta_ns?: number;
  Nu_os?: number;
  Nu_ns?: number;
  alpha_os?: number;
  alpha_ns?: number;
  k_ch?: number;
  k?: number;
  w_os_1?: number;
  w_ns_1?: number;
  zp?:number;
}

interface Props {
  results: ThermalResults;
}

const ThermalCalculationsTable: React.FC<Props> = ({ results }) => {
  if (
    results.dt_b === undefined ||
    results.dt_m === undefined ||
    results.dt_sr_1 === undefined ||
    results.t_os_sr === undefined ||
    results.t_ns_sr === undefined ||
    results.t_st === undefined ||
    results.Pr_os === undefined ||
    results.Pr_ns === undefined ||
    results.Pr_st === undefined ||
    results.Re_os === undefined ||
    results.Re_ns === undefined ||
    results.zeta_os === undefined ||
    results.zeta_ns === undefined ||
    results.Nu_os === undefined ||
    results.Nu_ns === undefined ||
    results.alpha_os === undefined ||
    results.alpha_ns === undefined ||
    results.k_ch === undefined ||
    results.k === undefined ||
    results.w_os_1 === undefined ||
    results.w_ns_1 === undefined ||
    results.zp === undefined
  ) {
    return null;
  }

  return (
    <div className="results-container">
      <h2>Тепловой расчет</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>Параметр</th>
            <th className="center">Обозначение</th>
            <th className="center">Значение</th>
          </tr>
        </thead>
        <tbody>
          <CalculationRow label="Разность температур по боковой линии" symbol="dt_b" value={results.dt_b} />
          <CalculationRow label="Средняя разность температур" symbol="dt_m" value={results.dt_m} />
          <CalculationRow label="Среднелогарифмическая разность температур" symbol="dt_sr_1" value={results.dt_sr_1} />

          <CalculationRow label="Средняя температура охлаждаемой среды" symbol="t_os_sr" value={results.t_os_sr} />
          <CalculationRow label="Средняя температура нагреваемой среды" symbol="t_ns_sr" value={results.t_ns_sr} />
          <CalculationRow label="Средняя температура стенки" symbol="t_st" value={results.t_st} />

          <CalculationRow label="Число Прандтля охлаждаемой среды" symbol="Pr_os" value={results.Pr_os} />
          <CalculationRow label="Число Прандтля нагреваемой среды" symbol="Pr_ns" value={results.Pr_ns} />
          <CalculationRow label="Число Прандтля стенки" symbol="Pr_st" value={results.Pr_st} />
          
          <CalculationRow label="Число Рейнольдса охлаждаемой среды" symbol="Re_os" value={results.Re_os} />
          <CalculationRow label="Число Рейнольдса нагреваемой среды" symbol="Re_ns" value={results.Re_ns} />

          <CalculationRow label="Гидравлическое сопротивление охлаждаемой среды" symbol="ζ_os" value={results.zeta_os} />
          <CalculationRow label="Гидравлическое сопротивление нагреваемой среды" symbol="ζ_ns" value={results.zeta_ns} />

          <CalculationRow label="Число Нуссельта охлаждаемой среды" symbol="Nu_os" value={results.Nu_os} />
          <CalculationRow label="Число Нуссельта нагреваемой среды" symbol="Nu_ns" value={results.Nu_ns} />

          <CalculationRow label="Коэффициент теплоотдачи по охлаждаемой среде" symbol="α_os" value={results.alpha_os} />
          <CalculationRow label="Коэффициент теплоотдачи по нагреваемой среде" symbol="α_ns" value={results.alpha_ns} />

          <CalculationRow label="Коэффициент теплопередачи для чистой поверхности" symbol="k_ch" value={results.k_ch} />
          <CalculationRow label="Коэффициент теплопередачи с учетом загрязнений" symbol="k" value={results.k} />

          <CalculationRow label="Рациональная скорость охлаждаемой среды" symbol="w_os_1" value={results.w_os_1} />
          <CalculationRow label="Рациональная скорость нагреваемой среды" symbol="w_ns_1" value={results.w_ns_1} />
          <CalculationRow label="Запас поверхности теплообмена" symbol="zp" value={results.zp} />
        </tbody>
      </table>
    </div>
  );
};

export default ThermalCalculationsTable;
