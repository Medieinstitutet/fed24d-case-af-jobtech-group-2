import {
  DigiInfoCardMulti,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import {
  InfoCardMultiHeadingLevel,
  InfoCardMultiType,
} from '@digi/arbetsformedlingen';
import { useAdContext } from '../contexts/useAdContext';
import { JobsPerMunicipalityChart } from './BarChart';
export const AdsPresentation = () => {
  const { ads, currentPage } = useAdContext(); //Custom hook to get ads from AdContext
  const startIndex = (currentPage - 1) * 10;
  const currentAds = ads.slice(startIndex, startIndex + 10);
  
  const afHTML = (
    <DigiTypography>
      <JobsPerMunicipalityChart ads={ads} />
      <h3>Här kan du se hur många jobb som finns på respektive ort</h3>
      {currentAds.map((ad) => {
        return (
          <div key={ad.id}>
          <DigiInfoCardMulti
//            key={ad.id}
            afHeading={ad.headline}
            afHeadingLevel={InfoCardMultiHeadingLevel.H3}
            afType={InfoCardMultiType.ENTRY}
            afLinkHref={`/ads/${ad.id}`}
          >
            <h3>{ad.employer?.name}</h3>
            {ad.workplace_address?.municipality &&
              ad.workplace_address?.region && (
                <p style={{ marginBottom: '0' }}>
                  <strong>Plats:</strong> {ad.workplace_address.municipality} ,{' '}
                  {ad.workplace_address.region}
                </p>
              )}
            {ad.publication_date && (
              <>
                <strong>Publicerad:</strong>{' '}
                {new Date(ad.publication_date).toLocaleDateString()}
              </>
            )}{' '}
          </DigiInfoCardMulti>
          </div>
        );
      })}
    </DigiTypography>
  );
  
  return (
    <>
      {afHTML}
      {/* {ads.map((ad, index) => {
        if (index < 10) {
          return (
            <DigiInfoCardMulti
              key={ad.id}
              afHeading={ad.headline}
              afHeadingLevel={InfoCardMultiHeadingLevel.H3}
              afType={InfoCardMultiType.RELATED}
              afLinkHref={`/ads/${ad.id}`}
            >
              <DigiTypography>
                <h3>{ad.employer?.name}</h3>
                {ad.workplace_address?.municipality &&
                  ad.workplace_address?.region && (
                    <p style={{ marginBottom: '0' }}>
                      <strong>Plats:</strong>{' '}
                      {ad.workplace_address.municipality} ,{' '}
                      {ad.workplace_address.region}
                    </p>
                  )}
                {ad.publication_date && (
                  <>
                    <strong>Publicerad:</strong>{' '}
                    {new Date(ad.publication_date).toLocaleDateString()}
                  </>
                )}{' '}
              </DigiTypography>
            </DigiInfoCardMulti>
          );
        }
      })} */}
    </>
  );
};
