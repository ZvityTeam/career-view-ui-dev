import React from 'react';

interface SpacerProps {
  size?: number; // Size in pixels (default: 16px)
  horizontal?: boolean; // If true, applies spacing horizontally
}

export const Spacer: React.FC<SpacerProps> = ({
  size = 16,
  horizontal = false,
}) => {
  return (
    <div
      style={{
        width: horizontal ? `${size}px` : '100%',
        height: horizontal ? '100%' : `${size}px`,
      }}
    />
  );
};
