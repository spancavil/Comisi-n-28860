import React from 'react';
import './styles.css';

const InLineClasses = ({condition}) => {
  return (
    <h3
        className={`clase-base ${condition && 'clase-verdadera'}`}
    >InLineClasses</h3>
  )
}

export default InLineClasses