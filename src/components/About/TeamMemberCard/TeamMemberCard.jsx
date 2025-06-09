import React from 'react';
import PropTypes from 'prop-types';
import './TeamMemberCard.scss';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="team-member-card" data-testid={`team-member-card-${member.id}`}>
      <img
        src={member.photo}
        alt={`Фото мастера ${member.name}`}
        className="team-member-card__photo"
      />
      <div className="team-member-card__info">
        <h3 className="team-member-card__name">{member.name}</h3>
        <p className="team-member-card__specialization">{member.specialization}</p>
        <p className="team-member-card__experience">{member.experience}</p>
        {member.achievements && member.achievements.length > 0 && (
          <div className="team-member-card__achievements">
            <h4>Достижения:</h4>
            <ul>
              {member.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

TeamMemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    achievements: PropTypes.arrayOf(PropTypes.string),
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamMemberCard;
