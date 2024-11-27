import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  title 
}) => {
  return (
    <div className={`card ${className}`}>
      {title && (
        <div className="card-header">
          <h5 className="card-title">{title}</h5>
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;
