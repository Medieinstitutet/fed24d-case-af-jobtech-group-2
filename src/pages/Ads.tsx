import {
  DigiLayoutContainer,
  DigiLoaderSpinner,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { LoaderSpinnerSize } from '@digi/arbetsformedlingen';
import { SearchForm } from '../components/SearchForm';
import { AdsPresentation } from '../components/AdsPresentation';
import { useAdContext } from '../contexts/useAdContext';
import type { AdsLoader } from '../loaders/adsLoader';

export const Ads = () => {
  const loaderData = useLoaderData<AdsLoader>(); // Get initial data from loader
  const { ads, setAds, loading } = useAdContext(); // Custom hook for context

  useEffect(() => {
    const setInitialAds = () => {
      setAds(loaderData.ads);
    };

    if (!loaderData?.ads.length || ads.length > 0) return;

    setInitialAds();
  });

  return (
    <DigiLayoutContainer afNoGutter afVerticalPadding>
      <DigiTypography>
        <h2>Search and Result</h2>
      </DigiTypography>
      <SearchForm />
      <AdsPresentation />
      {loading && (
        <DigiLoaderSpinner
          afSize={LoaderSpinnerSize.MEDIUM}
          afText="Laddar"
        ></DigiLoaderSpinner>
      )}
    </DigiLayoutContainer>
  );
};
