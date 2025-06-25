import { useState } from 'react';
import { parseInputsToNumbers } from '../utils/format';

// Thermal
import {
  dt_b, dt_m, dt_sr_1, t_os_sr, t_ns_sr, t_st,
  Pr_os, Pr_ns, Pr_st,
  Re_os, Re_ns,
  zeta_os, zeta_ns,
  Nu_os, Nu_ns,
  alpha_os, alpha_ns,
  k_ch, k_total,
  w_os_1, w_ns_1,
  zp,
} from '../utils/thermalCalculations';

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
  k_st, k_gr,
  f1, F1,
} from '../constants/values';

// Structural
import {
  Fa, G_os, G_ns, f_p_os, f_p_ns,
  m_os, m_ns, n_channels,
  f_p_os_fact, f_p_ns_fact, Fa_fact
} from '../utils/structuralCalculations';

import { ThermalInput } from '../types/termal';
import { CombinedResults } from '../types/general';

export function useCombinedCalculations() {
  const [results, setResults] = useState<CombinedResults | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const calculate = (inputs: ThermalInput) => {
    setErrors([]);
    try {
      const parsed = parseInputsToNumbers(inputs);
      const { t1_os, t2_os, t1_ns, t2_ns, Q, dP_os, dP_ns, X_os, X_ns } = parsed;

      // Thermal
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

      const w_os1 = w_os_1(k, dtsr, dP_os, c_os, t1_os, t2_os, ρ_os, zeta_os_val);
      const w_ns1 = w_ns_1(k, dtsr, dP_ns, c_ns, t2_ns, t1_ns, ρ_ns, zeta_ns_val);

      const zp_val = zp(kch, k);

      // Structural
      const Fa_val = Fa(Q, k, dtsr);
      const G_os_val = G_os(Q, c_os, t1_os, t2_os);
      const G_ns_val = G_ns(Q, c_ns,t1_ns, t2_ns);
      const f_p_os_val = f_p_os(G_os_val, ρ_os, w_os);
      const f_p_ns_val = f_p_ns(G_ns_val, ρ_ns, w_ns);
      const m_os_val = m_os(f_p_os_val, f1);
      const m_ns_val = m_ns(f_p_ns_val, f1);
      const n_val = n_channels(m_os_val, m_ns_val);
      const f_p_os_fact_val = f_p_os_fact(f1, m_os_val);
      const f_p_ns_fact_val = f_p_ns_fact(f1, m_ns_val);
      const Fa_fact_val = Fa_fact(F1, n_val);

      setResults({
        thermal: {
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
          zp: zp_val,
        },
        structural: {
          Fa: Fa_val,
          G_os: G_os_val,
          G_ns: G_ns_val,
          f_p_os: f_p_os_val,
          f_p_ns: f_p_ns_val,
          m_os: m_os_val,
          m_ns: m_ns_val,
          n: n_val,
          f_p_os_fact: f_p_os_fact_val,
          f_p_ns_fact: f_p_ns_fact_val,
          Fa_fact: Fa_fact_val,
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        setErrors([error.message]);
      } else {
        setErrors(['Unknown error during calculation']);
      }
      setResults(null);
    }
  };

  const clear = () => {
    setResults(null);
    setErrors([]);
  };

  return { results, errors, calculate, clear };
}
