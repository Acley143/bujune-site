import { useTheme } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { HOMEPAGE_TITLE, SITE_NAME } from 'constants/site';

export { HOMEPAGE_TITLE };

interface Props {
  /**
   * Tab/window title that shows in a browser
   */
  title?: string;

  /**
   * Description shown to Google/others
   */
  description?: string;
}

/**
 * Maps from graph item names like "url" for "og:url"/"twitter:url" to their
 * content, like "https://example" or "undefined"
 */
type Graph = Record<string, string | undefined>;

const MAX_DESC_LENGTH = 300;
const OG_IMAGE_PATH = '/og-image.png';
const GRAPH_PREFIXES = ['og', 'twitter'] as const;

/**
 * Small helper to create og: and twitter: elements for keys + content
 */
const graphMetaItems = (graph: Graph) =>
  Object.entries(graph).map(([name, content]) =>
    GRAPH_PREFIXES.map((prefix) =>
      content ? (
        <meta key={`${prefix}:${name}graphmeta`} property={`${prefix}:${name}`} content={content} />
      ) : undefined,
    ),
  );

/**
 * Populates the `<head>` of a given page from the title/description here
 */
export function Meta({ title, description }: Props) {
  const router = useRouter();
  const [pageUrl, setPageUrl] = useState('');
  const [baseUrl, setBaseUrl] = useState('');

  useEffect(() => {
    const { host } = window.location;
    const newBaseUrl = `https://${host}`;
    setBaseUrl(newBaseUrl);
    setPageUrl(`${newBaseUrl}${router.pathname}`);
  }, [router.pathname]);

  const truncatedDescription =
    description && description.length > MAX_DESC_LENGTH
      ? `${description.slice(0, MAX_DESC_LENGTH)}...`
      : description;
  const resolvedTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const theme = useTheme();

  return (
    <Head>
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:locale" property="og:locale" content="en_US" />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <title key="title">{resolvedTitle}</title>
      {truncatedDescription && (
        <meta key="description" name="description" content={truncatedDescription} />
      )}
      {graphMetaItems({
        title: title ?? SITE_NAME,
        description: truncatedDescription,
        url: pageUrl,
        image: `${baseUrl}${OG_IMAGE_PATH}`,
      })}
      <link key="favicon" rel="icon" href="/favicon.ico" />
      <meta key="theme-color" name="theme-color" content={theme.vars.palette.background.default} />
      <meta
        key="msapplication-TileColor"
        name="msapplication-TileColor"
        content={theme.vars.palette.background.default}
      />
    </Head>
  );
}
