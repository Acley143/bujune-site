import type { ContentCardProps } from 'components/contentCards/ContentCard';
import { ContentCard } from 'components/contentCards/ContentCard';
import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { GITHUB_USERNAME } from 'constants/site';

type GitHubEvent = {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
};

const EVENT_LABELS: Record<string, string> = {
  PushEvent: 'Pushed to',
  CreateEvent: 'Created',
  PullRequestEvent: 'Opened a PR in',
  WatchEvent: 'Starred',
  ForkEvent: 'Forked',
  IssuesEvent: 'Opened an issue in',
  PublicEvent: 'Made public',
};

function describeEvent(event: GitHubEvent) {
  const label = EVENT_LABELS[event.type] ?? event.type;
  return `${label} ${event.repo.name}`;
}

function isGitHubEventArray(data: unknown): data is GitHubEvent[] {
  return Array.isArray(data);
}

async function fetchRecentEvents(): Promise<GitHubEvent[]> {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=5`);
  if (!res.ok) {
    return [];
  }
  const data: unknown = await res.json();
  return isGitHubEventArray(data) ? data : [];
}

/**
 * Fetches recent public activity directly from GitHub's public REST API,
 * client-side - no auth token or backend required.
 */
export function GitHubActivityCard({ turnOnAnimation }: Pick<ContentCardProps, 'turnOnAnimation'>) {
  const [events, setEvents] = useState<GitHubEvent[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchRecentEvents()
      .then((data) => {
        if (!cancelled) {
          setEvents(data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setEvents([]);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (events && events.length === 0) {
    return null;
  }

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
        Recent GitHub Activity
      </Typography>
      <Stack spacing={1}>
        {(events ?? []).map((event) => (
          <Typography
            key={event.id}
            variant="body2"
            sx={{ color: (theme) => theme.vars.palette.text.secondary }}
          >
            {describeEvent(event)}
          </Typography>
        ))}
        {events === null && (
          <Typography variant="body2" sx={{ color: (theme) => theme.vars.palette.text.secondary }}>
            Loading…
          </Typography>
        )}
      </Stack>
    </ContentCard>
  );
}
