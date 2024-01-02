export const getRadiusVariables = (
  scaling: number,
  radius: 'none' | 'sm' | 'md' | 'lg' | 'full',
) => {
  let factor = '0'
  let radiusFull = '0px'
  switch (radius) {
    case 'none':
      factor = '0'
      break
    case 'sm':
      factor = '0.75'
      break
    case 'md':
      factor = '1'
      break
    case 'lg':
      factor = '1.875'
      break
    case 'full':
      factor = '1.5'
      radiusFull = '99999px'
      break
  }
  return {
    [`--scaling`]: String(scaling),
    [`--radius-factor`]: factor,
    [`--radius-1`]: `calc(3px * var(--scaling) * var(--radius-factor))`,
    [`--radius-2`]: `calc(4px * var(--scaling) * var(--radius-factor))`,
    [`--radius-3`]: `calc(6px * var(--scaling) * var(--radius-factor))`,
    [`--radius-4`]: `calc(8px * var(--scaling) * var(--radius-factor))`,
    [`--radius-5`]: `calc(12px * var(--scaling) * var(--radius-factor))`,
    [`--radius-6`]: `calc(16px * var(--scaling) * var(--radius-factor))`,
  }
}
