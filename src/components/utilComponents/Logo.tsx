import { useContext } from 'react';
import { mixinSx } from 'ui/helpers/mixinSx';
import { SxProps } from 'ui/theme';
import { SITE_INITIALS } from 'constants/site';
import { ScrollIndicatorContext } from '../nav/ScrollIndicatorContext';
import { Link } from './Link';

/**
 * Aspect ratio'd 1:1 circle. Big, bold, and squished text for use as
 * logo. Has background on scroll + scales down a bit.
 */
const logoTextStyles =
  (isScrolled: boolean): SxProps =>
  (theme) => ({
    '&': {
      fontSize: '2.5em',
    },
    background: 'none',
    boxShadow: 'none',
    border: 'none',
    borderRadius: 1,
    '&:hover': {
      background: 'none',
      boxShadow: 'none',
      border: 'none',
      color: theme.vars.palette.primary.dark,
      transform: 'scale(1.05)',
    },
    '&:focus-visible': {
      outline: '-webkit-focus-ring-color auto 1px',
      background: 'none',
      boxShadow: 'none',
      border: 'none',
    },
    fontVariationSettings: "'wght' 800, 'wdth' 120",
    letterSpacing: '-0.12em',
    lineHeight: 0.75, // visually center the text
    color: theme.vars.palette.primary.main,
    paddingY: 2,
    paddingX: 0,

    willChange: 'font-size, transform',
    ...(isScrolled && {
      transform: 'scale(0.75)',
      paddingY: 0,
    }),
    transition: theme.transitions.create(['color', 'transform', 'padding', 'font-size']),
  });

/**
 * Logo + scroll to top button, with certain changes that happen on
 * scroll.
 */
export function Logo() {
  const isScrolled = useContext(ScrollIndicatorContext);
  return (
    <Link
      href="/"
      title={SITE_INITIALS}
      linkProps={{ underline: 'none' }}
      sx={mixinSx(
        {
          display: 'block',
        },
        logoTextStyles(isScrolled),
      )}
    />
  );
}
