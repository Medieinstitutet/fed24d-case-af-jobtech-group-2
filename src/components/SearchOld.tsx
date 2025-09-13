import {
  ButtonType,
  FormInputSearchVariation,
  FormInputType,
  LayoutContainerVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiFormFilter,
  DigiFormInputSearch,
  DigiLayoutContainer,
} from '@digi/arbetsformedlingen-react';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { getAds } from '../services/adService';
import type { AdsLoader } from '../loaders/adsLoader';
// import { AdsPresentation } from './AdsPresentation';

export const SearchOld = () => {
  const { ads: initialAds } = useLoaderData<AdsLoader>();
  const [ads, setAds] = useState(initialAds);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event: CustomEvent<string>) => {
    const query = event.detail;
    if (!query) return;
    setLoading(true);

    try {
      const results = await getAds(query);
      setAds(results);
    } catch (err) {
      console.error(err);
      setAds([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <DigiLayoutContainer
        afVariation={LayoutContainerVariation.STATIC}
        afVerticalPadding
      >
        <DigiFormInputSearch
          afLabel="Sök på ett eller flera ord"
          afVariation={FormInputSearchVariation.MEDIUM}
          afType={FormInputType.SEARCH}
          afButtonText="Sök"
          afButtonType={ButtonType.SUBMIT}
          onAfOnSubmitSearch={handleSearch}
        ></DigiFormInputSearch>
        <DigiFormFilter
          afFilterButtonText="Filter 1"
          afSubmitButtonText="Filtrera"
          afName="Legend text"
          afListItems={[
            { id: 'omr1', label: 'Område 1' },
            { id: 'omr2', label: 'Område 2' },
            { id: 'omr3', label: 'Område 3' },
          ]}
        />
      </DigiLayoutContainer>
      <DigiLayoutContainer
        afVariation={LayoutContainerVariation.STATIC}
        afVerticalPadding
      >
        {/* Med vanlig HTML fungerar det att söka och rendera om HTML:en */}
        <ul>
          {ads.map((ad) => (
            <li key={ad.id}>
              {ad.headline} – {ad.employer?.name}
            </li>
          ))}
        </ul>
        {/* <AdsPresentation ads={ads} loading={loading} /> */}
        {loading && <p>Laddar...</p>}
        {!loading && ads.length === 0 && <p>Inga annonser hittades.</p>}
        {/* {loading && (
          <DigiLoaderSpinner
            afSize={LoaderSpinnerSize.MEDIUM}
            afText="Laddar"
          ></DigiLoaderSpinner>
        )} */}
      </DigiLayoutContainer>
    </>
  );
};
