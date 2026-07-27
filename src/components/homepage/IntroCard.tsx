import { ContentCard } from 'components/contentCards/ContentCard';
import { HoverableContainer } from 'components/utilComponents/HoverableContainer';
import { Image } from 'components/utilComponents/Image';
import { useState } from 'react';
import { useCurrentImageSizes } from 'hooks/useCurrentImageSizes';
import { HorizontalStack } from 'ui/HorizontalStack';
import { Link } from 'components/utilComponents/Link';
import { Typography } from '@mui/material';
import { INTRO, INTRO_LINKS } from 'constants/site';
import { NavItem } from 'ui/Nav';
import type { Link as LinkType } from 'types/content';

/**
 * Width of the intro image on small screens
 */
const SMALL_IMAGE_SIZE = '14em';

function IntroLink({ link }: { link: LinkType }) {
  return (
    <NavItem sx={{ padding: 0 }}>
      <Link
        title={link.title}
        icon={link.icon}
        layout="icon"
        href={link.url}
        isExternal={link.url?.startsWith('http')}
        aria-label={link.title}
        tooltipPlacement="bottom"
        linkProps={{
          color: 'secondary',
        }}
        sx={{
          marginRight: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </NavItem>
  );
}

export function IntroCard() {
  const [isHovered, setIsHovered] = useState(false);
  const { width, height, sizes } = useCurrentImageSizes();

  return (
    <>
      <ContentCard
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        sx={(theme) => ({
          [theme.breakpoints.down('md')]: {
            justifySelf: 'center',
            width: SMALL_IMAGE_SIZE,
            height: SMALL_IMAGE_SIZE,
            borderRadius: `calc(${SMALL_IMAGE_SIZE} / 2)`,
          },
        })}
      >
        <HoverableContainer isHovered={isHovered}>
          <Image
            url={INTRO.headshotUrl}
            width={width}
            height={height}
            alt="Introduction image"
            priority
            sizes={sizes}
          />
        </HoverableContainer>
      </ContentCard>
      <ContentCard
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          background: 'none',
          border: 'none',
          boxShadow: 'none',
          borderRadius: 0,
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: (theme) => theme.spacing(3) }}>
          {INTRO.heading}
        </Typography>
        {INTRO.paragraphs.map((paragraph) => (
          <Typography
            key={paragraph}
            variant="body1"
            sx={{ marginBottom: (theme) => theme.spacing(3.5) }}
          >
            {paragraph}
          </Typography>
        ))}
        <HorizontalStack>
          {INTRO_LINKS.map((link) => (
            <IntroLink link={link} key={link.url} />
          ))}
        </HorizontalStack>
      </ContentCard>
    </>
  );
}
