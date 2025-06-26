import { CalculationParameter } from "../../types/general";

const hydromechanicalParameters: CalculationParameter[] = [
  {
    key: 'w_os_h',
    label: 'Фактическая скорость движения охлаждаемой среды в каналах теплообменника',
    unit: 'м/с',
  },
  {
    key: 'w_ns_h',
    label: 'Фактическая скорость движения нагреваемой среды в каналах теплообменника',
    unit: 'м/с',
  },
  {
    key: 'dP_os_h',
    label: 'Гидравлическое сопротивление охлаждаемой среды',
    unit: 'кПа',
  },
  {
    key: 'dP_ns_h',
    label: 'Гидравлическое сопротивление нагреваемой среды',
    unit: 'кПа',
  },
];

export default hydromechanicalParameters;
