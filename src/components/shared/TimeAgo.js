import React from 'react';
import timeago from 'timeago.js';

const TimeAgo = ({ data }) => <span>{timeago().format(data, 'zh_CN')}</span>;

TimeAgo.propTypes = {
  data: React.PropTypes.string.isRequired
};

export default TimeAgo;
