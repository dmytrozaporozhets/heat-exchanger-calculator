/**
 * Фактическая скорость движения охлаждаемой среды в каналах теплообменника
 * w_os = G_os / (ρ_os * f_p_os)
 */
export function w_os_h(G_os: number, ρ_os: number, f_p_os: number): number {
  return G_os / (ρ_os * f_p_os);
}

/**
 * Фактическая скорость движения нагреваемой среды в каналах теплообменника
 * w_ns = G_ns / (ρ_ns * f_p_ns)
 */
export function w_ns_h(G_ns: number, ρ_ns: number, f_p_ns: number): number {
  return G_ns / (ρ_ns * f_p_ns);
}

/**
 * Гидравлическое сопротивление охлаждаемой среды
 * dP_os = ζ_os * (Lpr / d_e) * ρ_os * (w_os^2 / 2) * (X_os / 1000)
 */
export function dP_os_h(
  ζ_os: number,
  Lpr: number,
  d_e: number,
  ρ_os: number,
  w_os_val: number,
  X_os: number
): number {
  return ζ_os * (Lpr / d_e) * ρ_os * ( Math.pow(w_os_val, 2) / 2) * (X_os / 1000);
}

/**
 * Гидравлическое сопротивление нагреваемой среды
 * dP_ns = ζ_ns * (Lpr / d_e) * ρ_ns * (w_ns^2 / 2) * (X_ns / 1000)
 */
export function dP_ns_h(
  ζ_ns: number,
  Lpr: number,
  d_e: number,
  ρ_ns: number,
  w_ns_val: number,
  X_ns: number
): number {
  return ζ_ns * (Lpr / d_e) * ρ_ns * ( Math.pow(w_ns_val, 2)/ 2) * (X_ns / 1000);
}
