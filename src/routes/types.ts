import * as React from 'react';

export interface Route {
  path: string;
  component: () => React.ReactNode;
  secured?: boolean;
}
