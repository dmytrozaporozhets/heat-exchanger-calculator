import { A_ns, A_os, C_ns, c_ns, C_os, c_os, c_st, d_e, Du, f1, F1, k_st, Lpr, n1_ns, n1_os, n2_ns, n2_os, n3_ns, n3_os, δ_st, λ_ns, λ_os, λ_st, ν_ns, ν_os, ν_st, ρ_ns, ρ_os, ρ_st } from "./values";

export const initialData = [
  { key: 't1_os', label: 'Начальная температура охлаждаемой среды', unit: '°C' },
  { key: 't2_os', label: 'Конечная температура охлаждаемой среды', unit: '°C' },
  { key: 't1_ns', label: 'Начальная температура нагреваемой среды', unit: '°C' },
  { key: 't2_ns', label: 'Конечная температура нагреваемой среды', unit: '°C' },
  { key: 'Q',    label: 'Тепловая нагрузка', unit: 'Вт' },
  { key: 'dP_os', label: 'Допустимые потери давления по охлаждаемой среде', unit: 'Па' },
  { key: 'dP_ns', label: 'Допустимые потери давления по нагреваемой среде', unit: 'Па' },
  { key: 'X_os',  label: 'Количество ходов по охлаждаемой среде', unit: '' },
  { key: 'X_ns',  label: 'Количество ходов по нагреваемой среде', unit: '' },
];

export const plateData = [
  { key: 'F1', 
    label: 'Поверхность теплообменна одной пластины',
    unit: 'м²', 
    value: F1 
  },
  { key: 'f1',  
    label: 'Площадь поперечного сечения одного канала',                   
    unit: 'м²', 
    value: f1 
  },
  { key: 'd_e', 
    label: 'Эквивалентный диаметр канала',                                
    unit: 'м',  
    value: d_e 
  },
  { key: 'δ_st',
    label: 'Толщина стенки пластины',                                    
    unit: 'м',  
    value: δ_st
  },
  { key: 'Lpr', 
    label: 'Приведённая длина канала',                                   
    unit: 'м',  
    value: Lpr
  },
  { key: 'Du',  
    label: 'Условный диаметр проходного сечения штуцера',                 
    unit: 'м',  
    value: Du 
  },
  { key: 'k_st',
    label: 'Коэффициент термического сопротивления стенки пластины',    
    unit: '',   
    value: k_st 
  },
  { key: 'A_os',
    label: '',    
    unit: '',   
    value: A_os 
  },
  { key: 'A_ns',
    label: '',    
    unit: '',   
    value: A_ns 
  },
  { key: 'C_os',
    label: '',    
    unit: '',   
    value: C_os 
  },
  { key: 'C_ns ',
    label: '',    
    unit: '',   
    value: C_ns 
  },
  { key: 'n1_os',
    label: '',    
    unit: '',   
    value: n1_os 
  },
  { key: 'n1_ns',
    label: '',    
    unit: '',   
    value: n1_ns 
  },
    { key: 'n2_os',
    label: '',    
    unit: '',   
    value: n2_os 
  },
  { key: 'n2_ns',
    label: '',    
    unit: '',   
    value: n2_ns 
  },
    { key: 'n3_os',
    label: '',    
    unit: '',   
    value: n3_os 
  },
  { key: 'n3_ns',
    label: '',    
    unit: '',   
    value: n3_ns 
  },
];


export const thermalPropsData = [
  {
    key: 'ρ_os',
    label: 'Плотность охлаждаемой среды',
    unit: 'кг/м³',
    value: ρ_os,
  },
  {
    key: 'ρ_ns',
    label: 'Плотность нагреваемой среды',
    unit: 'кг/м³',
    value: ρ_ns,
  },
  {
    key: 'ρ_st',
    label: 'Плотность стенки пластины',
    unit: 'кг/м³',
    value: ρ_st,
  },
  {
    key: 'ν_os',
    label: 'Кинематическая вязкость охлаждаемой среды',
    unit: 'м²/с',
    value: ν_os,
  },
  {
    key: 'ν_ns',
    label: 'Кинематическая вязкость нагреваемой среды',
    unit: 'м²/с',
    value: ν_ns,
  },
  {
    key: 'ν_st',
    label: 'Кинематическая вязкость стенки',
    unit: 'м²/с',
    value: ν_st,
  },
  {
    key: 'λ_os',
    label: 'Теплопроводность охлаждаемой среды',
    unit: 'Вт/(м·К)',
    value: λ_os,
  },
  {
    key: 'λ_ns',
    label: 'Теплопроводность нагреваемой среды',
    unit: 'Вт/(м·К)',
    value: λ_ns,
  },
  {
    key: 'λ_st',
    label: 'Теплопроводность стенки пластины',
    unit: 'Вт/(м·К)',
    value: λ_st,
  },
  {
    key: 'c_os',
    label: 'Удельная теплоёмкость охлаждаемой среды',
    unit: 'Дж/(кг·К)',
    value: c_os,
  },
  {
    key: 'c_ns',
    label: 'Удельная теплоёмкость нагреваемой среды',
    unit: 'Дж/(кг·К)',
    value: c_ns,
  },
  {
    key: 'c_st',
    label: 'Удельная теплоёмкость стенки пластины',
    unit: 'Дж/(кг·К)',
    value: c_st,
  },
  
];
