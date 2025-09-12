export type Ad = {
  id: number;
  headline: string;
  employer: {
    name: string;
  };
  workplace_address: {
    region?: string;
    municipality?: string;
  };
  publication_date?: string;
};
