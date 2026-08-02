import { Container, SectionHeading, TeamMemberCard } from '@domin8/ui';
import { team } from '@domin8/data';

export const metadata = {
  title: 'Team — Domin8',
  description: 'Meet the team behind Domin8.',
};

export default function TeamPage() {
  return (
    <Container>
      <section className="d8-page-section">
        <SectionHeading
          eyebrow="Team"
          title="The people behind Domin8"
          description="A small, hands-on team running every part of the business — product, operations, and everything in between."
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
