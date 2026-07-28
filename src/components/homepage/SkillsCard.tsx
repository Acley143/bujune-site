import type { ContentCardProps } from 'components/contentCards/ContentCard';
import { ContentCard } from 'components/contentCards/ContentCard';
import { Box, Chip, Typography } from '@mui/material';
import { SKILLS } from 'constants/site';

export function SkillsCard({ turnOnAnimation }: Pick<ContentCardProps, 'turnOnAnimation'>) {
  return (
    <ContentCard
      horizontalSpan={2}
      turnOnAnimation={turnOnAnimation}
      sx={{
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Skills
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {SKILLS.map((skill) => (
          <Chip key={skill} label={skill} size="small" />
        ))}
      </Box>
    </ContentCard>
  );
}
