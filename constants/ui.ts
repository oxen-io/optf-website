// https://tailwindcss.com/docs/responsive-design
import tailwindConfig from '@/tailwind.config.js';

function makeNumber(input: string) {
  return Number(input.split('px')[0]);
}

const UI = {
  SMALL_BREAKPOINT: makeNumber(tailwindConfig.theme.screens.sm),
  MEDIUM_BREAKPOINT: makeNumber(tailwindConfig.theme.screens.md),
  LARGE_BREAKPOINT: makeNumber(tailwindConfig.theme.screens.lg),
  XLARGE_BREAKPOINT: makeNumber(tailwindConfig.theme.screens.xl),
  HUGE_BREAKPOINT: makeNumber(tailwindConfig.theme.screens['2xl']),
  ENORMOUS_BREAKPOINT: makeNumber(tailwindConfig.theme.screens['3xl']),
};

export default UI;
