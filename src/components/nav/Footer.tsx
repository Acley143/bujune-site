import { Section } from 'ui/Section';
import { Nav, NavGroup, NavItem } from 'ui/Nav';
import { Container } from '@mui/material';
import { HorizontalStack } from 'ui/HorizontalStack';
import type { Link as LinkType } from 'types/content';
import { Copyright } from 'lucide-react';
import { FOOTER_LINKS, SITE_NAME } from 'constants/site';
import { Link } from '../utilComponents/Link';

function FooterLink({ link }: { link: LinkType }) {
  return (
    <NavItem sx={{ padding: 0 }}>
      <Link
        title={link.title}
        icon={link.icon}
        layout="icon"
        href={link.url}
        isExternal={link.url?.startsWith('http')}
        aria-label={link.title}
        linkProps={{
          color: 'secondary',
        }}
        sx={{
          minWidth: 36,
          minHeight: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </NavItem>
  );
}

export function Footer() {
  const iconFooterLinks = FOOTER_LINKS.filter((link) => link.icon);
  return (
    <Container component={Section} sx={{ padding: 0 }}>
      <footer>
        <Nav
          sx={(theme) => ({
            flexDirection: 'row',
            flexWrap: 'wrap-reverse',
            columnGap: 3,
            marginTop: 8,
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column-reverse',
            },
          })}
        >
          <NavGroup
            sx={(theme) => ({
              justifyContent: 'left',
              [theme.breakpoints.down('md')]: {
                justifyContent: 'center',
              },
            })}
          >
            <NavItem>
              <Copyright size=".8em" /> {new Date().getFullYear()} {SITE_NAME}
            </NavItem>
          </NavGroup>
          <NavGroup sx={{ columnGap: 4 }} component="div">
            <HorizontalStack
              component="ul"
              sx={{
                padding: 0,
                margin: 0,
                flex: 1,
                marginLeft: -1.5,
                marginRight: -1.5,
                justifyContent: 'space-between',
              }}
            >
              {iconFooterLinks.map((link) => (
                <FooterLink link={link} key={link.url} />
              ))}
            </HorizontalStack>
          </NavGroup>
        </Nav>
      </footer>
    </Container>
  );
}
