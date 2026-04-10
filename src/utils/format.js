// 천원 단위까지 표현, 100원 이하 버림 (예: 39,450원 → 3.9만원)
export const formatCompactWon = (amount) => {
  const abs = Math.abs(amount)
  if (abs >= 10000) {
    const value = Math.floor(abs / 1000) / 10
    return `${value.toLocaleString()}만원`
  }
  return `${abs.toLocaleString()}원`
}

export const formatSignedWon = (amount) => {
  const sign = amount > 0 ? '+' : amount < 0 ? '-' : ''
  return `${sign}${Math.abs(amount).toLocaleString()}원`
}
