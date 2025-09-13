import type { APIResponse } from '../models/APIResponse';
import type { AdExt } from '../models/AdExt';
import { get } from './serviceBase';

const BASE_URL = 'https://jobsearch.api.jobtechdev.se/';
const SEARCH = 'search?occupation-group=DJh5_yyF_hEM';
// q=Stockholm%20frontend&offset=0&limit=10
// "q=Stockholm%20frontend" Is the search query. %20 = blankspace.
// occupation-group=DJh5_yyF_hEM targets jobs within the software development career.
// offset means where to start in the list and limit is how many to fetch.

export const getAds = async (searchValue: string) => {
  const data = await get<APIResponse>(
    `${BASE_URL}${SEARCH}&q=${searchValue}&offset=0&limit=10`
  ); // offset part will be dynamic so will have to be replaced

  return data.hits;
};

// Under construction
export const getAdsNew = async (
  query: string,
  offset: number,
  limit: number
) => {
  const response = await get<APIResponse>(
    `${BASE_URL}${SEARCH}&q=${query}&offset=${offset}&limit=${limit}`
  );
  localStorage.setItem('ads', JSON.stringify(response.hits));

  return { ads: response.hits, totalHits: response.total };
};

export const getAdById = async (id: string): Promise<AdExt> => {
  const data = await get<AdExt>(`${BASE_URL}ad/${id}`);

  return data;
};

export const getLatestAds = async () => {
  const data = await get<APIResponse>(
    `${BASE_URL}${SEARCH}&offset=0&limit=10&sort=pubdate-desc`
  );

  return data.hits;
};
