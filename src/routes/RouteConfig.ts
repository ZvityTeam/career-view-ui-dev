import { Home } from '../pages/home/Home.tsx';
import { Route } from './types.ts';

export const ROUTES: Route[] = [{ path: '/', component: Home, secured: false }];
