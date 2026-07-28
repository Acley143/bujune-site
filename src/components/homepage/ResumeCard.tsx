import type { ContentCardProps } from 'components/contentCards/ContentCard';
import { ContentCard } from 'components/contentCards/ContentCard';
import { FileText } from 'lucide-react';
import { RESUME_URL } from 'constants/site';

export function ResumeCard({ turnOnAnimation }: Pick<ContentCardProps, 'turnOnAnimation'>) {
  return (
    <ContentCard
      overlay="Resume"
      link={{ title: 'Resume', url: RESUME_URL }}
      turnOnAnimation={turnOnAnimation}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <FileText size="3em" />
    </ContentCard>
  );
}
