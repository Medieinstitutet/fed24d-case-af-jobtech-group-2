// JobsPerMunicipalityChart.tsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import type { AdExt } from '../models/AdExt';
import { countJobsPerMunicipality } from '../helpers/countJobsPerMunicipality';

interface Props {
  ads: AdExt[];
}

export const JobsPerMunicipalityChart = ({ ads }: Props) => {
  const data = countJobsPerMunicipality(ads);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip 
          cursor={false}
          formatter={(value: number) => 
            [`${value}`, 'Antal jobb']
          }
        />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
