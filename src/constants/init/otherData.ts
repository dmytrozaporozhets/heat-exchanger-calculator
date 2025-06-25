import { w_ns, w_os, k_gr } from '../values';
import { DataItem } from '../../types/general';

const otherData: DataItem[] = [
  { key: 'w_os', label: 'Средняя скорость охлаждаемой среды в каналах теплообменника', unit: 'м/с', value: w_os },
  { key: 'w_ns', label: 'Средняя скорость нагреваемой среды в каналах теплообменника', unit: 'м/с', value: w_ns },
  { key: 'k_gr', label: 'Коэффициент теплового сопротивления загрязнений', unit: '', value: k_gr },
];

export default otherData;
