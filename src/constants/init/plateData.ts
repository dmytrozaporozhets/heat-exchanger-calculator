import { A_ns, A_os, C_ns, C_os, d_e, Du, f1, F1, k_st, Lpr, n1_ns, n1_os, n2_ns, n2_os, n3_ns, n3_os, δ_st } from '../values';
import { DataItem } from '../../types/general';

const plateData: DataItem[] = [
  { key: 'F1', label: 'Поверхность теплообменна одной пластины', unit: 'м²', value: F1 },
  { key: 'f1', label: 'Площадь поперечного сечения одного канала', unit: 'м²', value: f1 },
  { key: 'd_e', label: 'Эквивалентный диаметр канала', unit: 'м', value: d_e },
  { key: 'δ_st', label: 'Толщина стенки пластины', unit: 'м', value: δ_st },
  { key: 'Lpr', label: 'Приведённая длина канала', unit: 'м', value: Lpr },
  { key: 'Du', label: 'Условный диаметр проходного сечения штуцера', unit: 'м', value: Du },
  { key: 'k_st', label: 'Коэффициент термического сопротивления стенки пластины', unit: '', value: k_st },

  { key: 'A_os', label: '', unit: '', value: A_os },
  { key: 'A_ns', label: '', unit: '', value: A_ns },
  { key: 'C_os', label: '', unit: '', value: C_os },
  { key: 'C_ns', label: '', unit: '', value: C_ns },
  { key: 'n1_os', label: '', unit: '', value: n1_os },
  { key: 'n1_ns', label: '', unit: '', value: n1_ns },
  { key: 'n2_os', label: '', unit: '', value: n2_os },
  { key: 'n2_ns', label: '', unit: '', value: n2_ns },
  { key: 'n3_os', label: '', unit: '', value: n3_os },
  { key: 'n3_ns', label: '', unit: '', value: n3_ns },
];

export default plateData;
