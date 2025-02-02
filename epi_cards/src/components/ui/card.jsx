// src/components/ui/card.jsx
import React from 'react';

export const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="card-content">{children}</div>;
};

export const Button = ({ onClick, children }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};
