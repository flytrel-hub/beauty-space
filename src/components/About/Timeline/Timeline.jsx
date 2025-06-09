import React from 'react';
import PropTypes from 'prop-types';
import './Timeline.scss';

const Timeline = ({ events }) => {
  return (
    <div className="timeline" data-testid="timeline">
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          data-testid={`timeline-item-${event.id}`}
        >
          <div className="timeline-content">
            <div className="timeline-date">{event.date}</div>
            <h3 className="timeline-title">{event.title}</h3>
            <p className="timeline-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Timeline;
