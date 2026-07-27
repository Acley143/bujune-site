import { Homepage } from 'components/homepage/Homepage';
import { PageLayout } from 'components/layouts/PageLayout';
import type { GetLayout } from 'types/Page';

type PageProps = Record<string, never>;

function Page() {
  return <Homepage />;
}

const getLayout: GetLayout<PageProps> = (page) => <PageLayout>{page}</PageLayout>;

Page.getLayout = getLayout;

export default Page;
