import { CalculationInputField } from "../../types/general";


export const initialData:CalculationInputField [] = [
  { key: 't1_os', label: 'Начальная температура охлаждаемой среды', unit: '°C', value: null },
  { key: 't2_os', label: 'Конечная температура охлаждаемой среды', unit: '°C', value: null },
  { key: 't1_ns', label: 'Начальная температура нагреваемой среды', unit: '°C', value: null },
  { key: 't2_ns', label: 'Конечная температура нагреваемой среды', unit: '°C', value: null },
  { key: 'Q', label: 'Тепловая нагрузка', unit: 'Вт', default: 2459000 },
  { key: 'dP_os', label: 'Допустимые потери давления по охлаждаемой среде', unit: 'Па', value: null },
  { key: 'dP_ns', label: 'Допустимые потери давления по нагреваемой среде', unit: 'Па', value: null },
  { key: 'X_os', label: 'Количество ходов по охлаждаемой среде', unit: '', value: null },
  { key: 'X_ns', label: 'Количество ходов по нагреваемой среде', unit: '', value: null },
];
