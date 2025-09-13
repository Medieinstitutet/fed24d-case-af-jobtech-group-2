import {
  DigiLayoutContainer,
  DigiLoaderSpinner,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { LoaderSpinnerSize } from '@digi/arbetsformedlingen';
import { SearchForm } from '../components/SearchForm';
import { AdsPresentation } from '../components/AdsPresentation';
import { useAdContext } from '../contexts/useAdContext';

export const Ads = () => {
  const { loading } = useAdContext();
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
