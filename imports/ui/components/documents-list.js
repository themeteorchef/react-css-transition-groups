import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Document } from './document.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const DocumentsList = ({ documents }) => (
  <ListGroup className="documents-list">
    <ReactCSSTransitionGroup
      transitionName="documents-list"
      transitionEnterTimeout={0}
      transitionLeaveTimeout={0}
    >
      {documents.map((doc) => (
        <Document key={ doc._id } document={ doc } />
      ))}
    </ReactCSSTransitionGroup>
  </ListGroup>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};
