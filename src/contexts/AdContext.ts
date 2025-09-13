import { createContext } from 'react';
import type { Ad } from '../models/Ad';

type AdContextType = {
  ads: Ad[];
  setAds: (ads: Ad[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;

  // lägg till totalResults ?
  // lägg till offset ???
};

export const AdContext = createContext<AdContextType | undefined>(undefined);
