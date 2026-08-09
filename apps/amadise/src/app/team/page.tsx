import { Container, SectionHeading, TeamMemberCard } from '@domin8/ui';
import { team } from '@domin8/data';

export const metadata = {
  title: 'Team — Amadise',
  description: 'Meet the Domin8 team behind Amadise.',
};

export default function TeamPage() {
  return (
    <Container>
      <section className="d8-page-section">
        <SectionHeading
          eyebrow="Team"
          title="The Domin8 team behind Amadise"
          description="Amadise is part of Domin8, so it's run by the same small, hands-on team — product, operations, and everything in between."
        />

        <div className="d8-team-grid">
          {team.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </Container>
  );
}
