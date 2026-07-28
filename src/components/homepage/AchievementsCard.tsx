import type { ContentCardProps } from 'components/contentCards/ContentCard';
import { ContentCard } from 'components/contentCards/ContentCard';
import { Stack, Typography } from '@mui/material';
import { ACHIEVEMENTS } from 'constants/site';

export function AchievementsCard({ turnOnAnimation }: Pick<ContentCardProps, 'turnOnAnimation'>) {
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
        Achievements
      </Typography>
      <Stack spacing={1.5}>
        {ACHIEVEMENTS.map((achievement) => (
          <Stack key={achievement.title} spacing={0.25}>
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              {achievement.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: (theme) => theme.vars.palette.text.secondary }}
            >
              {achievement.description}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </ContentCard>
  );
}
