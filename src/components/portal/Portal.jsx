import React from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ parent, children }) =>
  ReactDOM.createPortal(children, parent && parent.current ? parent.current : document.body);
export default Portal;
