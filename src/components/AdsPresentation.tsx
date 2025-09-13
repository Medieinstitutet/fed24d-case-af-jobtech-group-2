import {
  DigiInfoCardMulti,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import {
  InfoCardMultiHeadingLevel,
  InfoCardMultiType,
} from '@digi/arbetsformedlingen';
import { useAdContext } from '../contexts/useAdContext';

export const AdsPresentation = () => {
  const { ads } = useAdContext(); // Custom hook to get ads from AdContext

  return (
    <>
      {ads.map((ad) => (
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
          </DigiTypography>
        </DigiInfoCardMulti>
      ))}
    </>
  );
};
