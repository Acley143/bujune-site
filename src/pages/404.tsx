import { ErrorPageContents } from 'components/errors/ErrorPageContents';
import { ErrorLayout } from 'components/layouts/ErrorLayout';
import { PageLayout } from 'components/layouts/PageLayout';
import type { GetLayout } from 'types/Page';

type PageProps = Record<string, never>;

/**
 * Error page, for 404s specifically
 */
function Page() {
  return <ErrorPageContents statusCode={404} />;
}

const getLayout: GetLayout<PageProps> = (page) => (
  <PageLayout>
    <ErrorLayout statusCode={404}>{page}</ErrorLayout>
  </PageLayout>
);

Page.getLayout = getLayout;

export default Page;
