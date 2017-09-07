import React from 'react';
import PropTypes from 'prop-types';
import s from './TimeLineStyles';

const Timeline = () => {
  return (
    <div>
      <section style={s.container} {...this.props}>
        <div style={s.containerBefore} />
        {this.props.children}
        <div style={s.containerAfter} />
      </section >
    </div>
  );
};

Timeline.propTypes = {
  children: PropTypes.node.isRequired
};

export default Timeline;
