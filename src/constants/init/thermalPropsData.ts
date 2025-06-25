import { DataItem } from "../../types/general";
import { c_os, c_ns, c_st, λ_os, λ_ns, λ_st, ν_os, ν_ns, ν_st, ρ_os, ρ_ns, ρ_st } from '../values';

const thermalPropsData: DataItem[] = [
  { key: 'ρ_os', label: 'Плотность охлаждаемой среды', unit: 'кг/м³', value: ρ_os },
  { key: 'ρ_ns', label: 'Плотность нагреваемой среды', unit: 'кг/м³', value: ρ_ns },
  { key: 'ρ_st', label: 'Плотность стенки пластины', unit: 'кг/м³', value: ρ_st },

  { key: 'ν_os', label: 'Кинематическая вязкость охлаждаемой среды', unit: 'м²/с', value: ν_os },
  { key: 'ν_ns', label: 'Кинематическая вязкость нагреваемой среды', unit: 'м²/с', value: ν_ns },
  { key: 'ν_st', label: 'Кинематическая вязкость стенки', unit: 'м²/с', value: ν_st },

  { key: 'λ_os', label: 'Теплопроводность охлаждаемой среды', unit: 'Вт/(м·К)', value: λ_os },
  { key: 'λ_ns', label: 'Теплопроводность нагреваемой среды', unit: 'Вт/(м·К)', value: λ_ns },
  { key: 'λ_st', label: 'Теплопроводность стенки пластины', unit: 'Вт/(м·К)', value: λ_st },

  { key: 'c_os', label: 'Удельная теплоёмкость охлаждаемой среды', unit: 'Дж/(кг·К)', value: c_os },
  { key: 'c_ns', label: 'Удельная теплоёмкость нагреваемой среды', unit: 'Дж/(кг·К)', value: c_ns },
  { key: 'c_st', label: 'Удельная теплоёмкость стенки пластины', unit: 'Дж/(кг·К)', value: c_st },
];

export default thermalPropsData;
