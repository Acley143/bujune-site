import { ContentGrid } from 'components/homepage/ContentGrid';
import { HOMEPAGE_TITLE, Meta } from 'components/utilComponents/Meta';
import { useGridAnimation } from 'hooks/useGridAnimation';
import { useRef } from 'react';
import { Container } from '@mui/material';
import { PROJECTS } from 'constants/site';
import { IntroCard } from './IntroCard';
import { ProjectCard } from './ProjectCard';
import { SkillsCard } from './SkillsCard';
import { ResumeCard } from './ResumeCard';
import { AchievementsCard } from './AchievementsCard';
import { GitHubActivityCard } from './GitHubActivityCard';

export function Homepage() {
  const pageDescription = '';

  // For animating grid items
  const gridRef = useRef<HTMLDivElement | null>(null);
  const turnOnAnimation = useGridAnimation(gridRef);
  const projectCards = PROJECTS.filter((project) => project.visible).map((project) => (
    <ProjectCard key={project.title} {...project} turnOnAnimation={turnOnAnimation} />
  ));

  return (
    <>
      <Meta title={HOMEPAGE_TITLE} description={pageDescription} />
      <Container sx={{ marginTop: 16 }}>
        <ContentGrid gridRef={gridRef}>
          <IntroCard key="introCard" />
          <SkillsCard key="skills" turnOnAnimation={turnOnAnimation} />
          <ResumeCard key="resume" turnOnAnimation={turnOnAnimation} />
          {projectCards}
          <AchievementsCard key="achievements" turnOnAnimation={turnOnAnimation} />
          <GitHubActivityCard key="github" turnOnAnimation={turnOnAnimation} />
        </ContentGrid>
      </Container>
    </>
  );
}
