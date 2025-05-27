import * as React from 'react';

export interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
}

export interface Route {
  path: string;
  component: () => React.ReactNode;
  secured?: boolean;
  metaData?: Metadata;
}
