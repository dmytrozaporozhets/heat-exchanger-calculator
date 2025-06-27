export interface DataItem {
  key: string;
  label: string;
  unit?: string;
  default?: number;
  value?: number| string;
}

export interface CalculationInput {
  t1_os: number;
  t2_os: number;
  t1_ns: number;
  t2_ns: number;
  Q: number;
  dP_os: number;
  dP_ns: number;
  X_os: number;
  X_ns: number;
}

export interface CalculationInputField {
  key: keyof CalculationInput;
  label: string;
  unit?: string;
  value?: number | null;
  default?: number;
}

export interface CalculationParameter {
  key: string;
  label: string;
  unit: string;
}


export interface CombinedResults {
  thermal: {
    dt_b: number;
    dt_m: number;
    dt_sr_1: number;
    t_os_sr: number;
    t_ns_sr: number;
    t_st: number;
    Pr_os: number;
    Pr_ns: number;
    Pr_st: number;
    Re_os: number;
    Re_ns: number;
    ζ_os: number;
    ζ_ns: number;
    Nu_os: number;
    Nu_ns: number;
    α_os: number;
    α_ns: number;
    k_ch: number;
    k: number;
    w_os_1: number;
    w_ns_1: number;
    zp: number;
  };
  structural: {
    Fa: number;
    G_os: number;
    G_ns: number;
    f_p_os: number;
    f_p_ns: number;
    m_os: number;
    m_ns: number;
    n: number;
    f_p_os_fact: number;
    f_p_ns_fact: number;
    Fa_fact: number;
  };
  hydromechanical:{
    w_os_h: number;
    w_ns_h: number;
    dP_os_h: number;
    dP_ns_h: number;
  }
}