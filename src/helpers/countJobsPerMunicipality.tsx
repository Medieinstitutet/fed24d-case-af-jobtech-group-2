import type { AdExt } from '../models/AdExt';

export const countJobsPerMunicipality = (ads: AdExt[]) => {
  const counts: Record<string, number> = {};

ads.forEach((ad) => {
    const city = ad.workplace_address?.municipality;
    if (city) {
      counts[city] = (counts[city] || 0) + 1;
    }
  });

  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 7);
};