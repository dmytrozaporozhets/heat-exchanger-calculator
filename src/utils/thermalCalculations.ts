/**
 * Вычисляет разность температур по боковой линии
 * dt_b = t1_os − t2_ns
 */
export function dt_b(t1_os: number, t2_ns: number): number {
  return t1_os - t2_ns;
}

/**
 * Вычисляет среднюю разность температур
 * dt_m = t2_os − t1_ns
 */
export function dt_m(t2_os: number, t1_ns: number): number {
  return t2_os - t1_ns;
}

/**
 * Вычисляет среднюю логарифмическую разность температур
 * dt_sr_1 = (dt_b − dt_m) / ln(dt_b / dt_m)
 * При dt_b == dt_m возвращает dt_b (чтобы избежать деления на 0)
 */
export function dt_sr_1(dt_b_val: number, dt_m_val: number): number {
  if (dt_b_val === dt_m_val) {
    return dt_b_val;
  }
  return (dt_b_val - dt_m_val) / Math.log(dt_b_val / dt_m_val);
}

/**
 * Средняя температура охлаждаемой среды
 * t_os_sr = (t1_os + t2_os) / 2
 */
export function t_os_sr(t1_os: number, t2_os: number): number {
  return (t1_os + t2_os) / 2;
}

/**
 * Средняя температура нагреваемой среды
 * t_ns_sr = (t1_ns + t2_ns) / 2
 */
export function t_ns_sr(t1_ns: number, t2_ns: number): number {
  return (t1_ns + t2_ns) / 2;
}

/**
 * Средняя температура стенки
 * t_st = (t_os_sr + t_ns_sr) / 2
 */
export function t_st(t_os_sr_val: number, t_ns_sr_val: number): number {
  return (t_os_sr_val + t_ns_sr_val) / 2;
}

/**
 * Число Прандтля для охлаждаемой среды
 * Pr_os = c_os * ν_os * ρ_os / λ_os
 */
export function Pr_os(c_os: number, nu_os: number, rho_os: number, lambda_os: number): number {
  return (c_os * nu_os * rho_os) / lambda_os;
}

/**
 * Число Прандтля для нагреваемой среды
 * Pr_ns = c_ns * ν_ns * ρ_ns / λ_ns
 */
export function Pr_ns(c_ns: number, nu_ns: number, rho_ns: number, lambda_ns: number): number {
  return (c_ns * nu_ns * rho_ns) / lambda_ns;
}

/**
 * Число Прандтля для стенки
 * Pr_st = c_st * ν_st * ρ_st / λ_st
 */
export function Pr_st(c_st: number, nu_st: number, rho_st: number, lambda_st: number): number {
  return (c_st * nu_st * rho_st) / lambda_st;
}

/**
 * Число Рейнольдса для охлаждаемой среды
 * Re_os = (w_os * d_e) / ν_os
 */
export function Re_os(w_os: number, d_e: number, nu_os: number): number {
  return (w_os * d_e) / nu_os;
}

/**
 * Число Рейнольдса для нагреваемой среды
 * Re_ns = (w_ns * d_e) / ν_ns
 */
export function Re_ns(w_ns: number, d_e: number, nu_ns: number): number {
  return (w_ns * d_e) / nu_ns;
}

/**
 * Коэффициент общего гидравлического сопротивления по охлаждаемой среде
 * ζ_os = A_os / (Re_os^n3_os)
 */
export function zeta_os(A_os: number, Re_os_val: number, n3_os: number): number {
  return A_os / Math.pow(Re_os_val, n3_os);
}

/**
 * Коэффициент общего гидравлического сопротивления по нагреваемой среде
 * ζ_ns = A_ns / (Re_ns^n3_ns)
 */
export function zeta_ns(A_ns: number, Re_ns_val: number, n3_ns: number): number {
  return A_ns / Math.pow(Re_ns_val, n3_ns);
}

/**
 * Число Нуссельта по охлаждаемой среде
 * Nu_os = (C_os * Re_os^n1_os) * Re_os^n2_os * (Pr_os / Pr_st)^0.25
 */
export function Nu_os(C_os: number, Re_os_val: number, n1_os: number, n2_os:number, Pr_os_val: number, Pr_st_val: number): number {
  return (C_os * Math.pow(Re_os_val, n1_os))* Math.pow(Pr_os_val, n2_os) * Math.pow(Pr_os_val / Pr_st_val, 0.25);
}

/**
 * Число Нуссельта по нагреваемой среде
 * Nu_ns = (C_ns * Re_ns^n1_ns) * Re_ns^n2_ns * (Pr_ns / Pr_st)^0.25
 */
export function Nu_ns(C_ns: number, Re_ns_val: number, n1_ns: number, n2_ns:number, Pr_ns_val: number, Pr_st_val: number): number {
  return (C_ns * Math.pow(Re_ns_val, n1_ns))* Math.pow(Pr_ns_val, n2_ns) * Math.pow(Pr_ns_val / Pr_st_val, 0.25);
}

/**
 * Коэффициент теплоотдачи по охлаждаемой среде
 * α_os = Nu_os * λ_os / d_e
 */
export function alpha_os(Nu_os_val: number, lambda_os: number, d_e: number): number {
  console.log('alpha_os',(Nu_os_val * lambda_os) / d_e)
  return (Nu_os_val * lambda_os) / d_e;
}

/**
 * Коэффициент теплоотдачи по нагреваемой среде
 * α_ns = Nu_ns * λ_ns / d_e
 */
export function alpha_ns(Nu_ns_val: number, lambda_ns: number, d_e: number): number {
  return (Nu_ns_val * lambda_ns) / d_e;
}

/**
 * Коэффициент теплопередачи для чистой поверхности теплообменника
 * k_ch = ((1 / α_os) + k_st + (1 / α_ns))^-1
 */
export function k_ch(alpha_os_val: number, k_st: number, alpha_ns_val: number): number {
  return Math.pow((1 / alpha_os_val) + k_st + (1 / alpha_ns_val),-1);
}

/**
 * Коэффициент теплопередачи с учетом загрязнений
 * k = ((1 / α_os) + k_st + k_gr + (1 / α_ns))^-1
 */
export function k_total(alpha_os_val: number, k_st: number, k_gr: number, alpha_ns_val: number): number {
  return Math.pow((1 / alpha_os_val) + k_st + k_gr + (1 / alpha_ns_val),-1);
}

/**
 * Уточнённая рациональная скорость охлаждаемой среды в каналах теплообменника
 * w_os_1 = 2 * ∛((k * dt_sr_1 * dP_os) / (c_os * (t1_os - t2_os) * (ρ_os^2) * ζ_os))
 */
export function w_os_1(
  k: number,
  dt_sr_1: number,
  dP_os: number,
  c_os: number,
  t1_os: number,
  t2_os: number,
  p_os: number,
  zeta_os_val: number
): number {
  const numerator = k * dt_sr_1 * dP_os;
  const denominator = c_os * (t1_os - t2_os) * Math.pow(p_os, 2) * zeta_os_val;
  return 2 * Math.cbrt(numerator / denominator);
}

/**
 * Уточнённая рациональная скорость нагреваемой среды в каналах теплообменника
 * w_ns_1 = 2 * ∛((k * dt_sr_1 * dP_ns) / (c_ns * (t2_ns - t1_ns) * (ρ_ns^2) * ζ_ns))
 */
export function w_ns_1(
  k: number,
  dt_sr_1: number,
  dP_ns: number,
  c_ns: number,
  t2_ns: number,
  t1_ns: number,
  p_ns: number,
  zeta_ns_val: number
): number {
  const numerator = k * dt_sr_1 * dP_ns;
  const denominator = c_ns * (t2_ns - t1_ns) * Math.pow( p_ns, 2) * zeta_ns_val;
  return 2 * Math.cbrt(numerator / denominator);
}

/**
 * Запас поверхности теплообмена
 * zp = ((k_ch / k) − 1) ⋅ 100
 */
export function zp(k_ch: number, k: number): number {
  return ((k_ch / k) - 1) * 100;
}

