import type { TeamMember } from '@domin8/data';

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="d8-team-card">
      <div className="d8-team-card__photo-wrap">
        <img src={member.image} alt={member.name} className="d8-team-card__photo" />
      </div>
      <p className="d8-team-card__name">{member.name}</p>
      <p className="d8-team-card__role">{member.role}</p>
      {member.linkedinUrl && (
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="d8-team-card__linkedin"
          aria-label={`${member.name} on LinkedIn`}
        >
          LinkedIn ↗
        </a>
      )}
    </article>
  );
}
