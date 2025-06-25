/**
 * Площадь поверхности теплообмена
 * Fa = Q / (k * dt_sr_1)
 */
export function Fa(Q: number, k: number, dt_sr_1: number): number {
  return Q / (k * dt_sr_1);
}

/**
 * Расход охлаждаемой среды
 * G_os = Q / (c_os * (t1_os - t2_os))
 */
export function G_os(Q: number, c_os: number, t1_os: number, t2_os: number): number {
  return Q / (c_os * (t1_os - t2_os));
}

/**
 * Расход нагреваемой среды
 * G_ns = Q / (c_ns * (t1_ns - t2_ns))
 */
export function G_ns(Q: number, c_ns: number, t1_ns: number, t2_ns: number): number {
  return Q / (c_ns * ( t2_ns-t1_ns));
}

/**
 * Площадь поперечного сечения пакета по стороне охлаждаемой среды
 * f_p_os = (G_os * ρ_os * 3.6) / (3600 * w_os * 1000)
 */
export function f_p_os(G_os: number, ρ_os: number, w_os: number): number {
  return (G_os * ρ_os * 3.6) / (3600 * w_os * 1000);
}

/**
 * Площадь поперечного сечения пакета по стороне нагреваемой среды
 * f_p_ns = (G_ns * ρ_ns * 3.6) / (3600 * w_ns * 1000)
 */
export function f_p_ns(G_ns: number, ρ_ns: number, w_ns: number): number {
  return (G_ns * ρ_ns * 3.6) / (3600 * w_ns * 1000);
}

/**
 * Число каналов в одном ходе по стороне охлаждаемой среды (округляется до целого)
 * m_os = f_p_os / f1
 */
export function m_os(f_p_os: number, f1: number): number {
  return Math.round(f_p_os / f1);
}

/**
 * Число каналов в одном ходе по стороне нагреваемой среды (округляется до целого)
 * m_ns = f_p_ns / f1
 */
export function m_ns(f_p_ns: number, f1: number): number {
  return Math.round(f_p_ns / f1);
}

/**
 * Общее число каналов в одном ходе пакета
 * n = m_os + m_ns
 */
export function n_channels(m_os: number, m_ns: number): number {
  return m_os + m_ns;
}

/**
 * Фактическая площадь поперечного сечения по охлаждаемой среде
 * f_p_os = f1 * m_os
 */
export function f_p_os_fact(f1: number, m_os: number): number {
  return f1 * m_os;
}

/**
 * Фактическая площадь поперечного сечения по нагреваемой среде
 * f_p_ns = f1 * m_ns
 */
export function f_p_ns_fact(f1: number, m_ns: number): number {
  return f1 * m_ns;
}

/**
 * Фактическая площадь аппарата
 * Fa = F1 * (n - 1)
 */
export function Fa_fact(F1: number, n: number): number {
  return F1 * (n - 1);
}
