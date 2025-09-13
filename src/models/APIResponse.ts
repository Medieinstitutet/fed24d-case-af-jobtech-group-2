import type { Ad } from './Ad';

export type APIResponse = {
  total: {
    positions: number; // The same as value in API?
  };
  hits: Ad[];
};

// jobsearch API response
// {
//   "total": {
//     "value": 1437
//   },
//   "positions": 1860,
// ... etc
