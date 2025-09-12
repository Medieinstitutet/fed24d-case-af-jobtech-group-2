import type { Ad } from '../models/Ad';
import {
  DigiInfoCardMulti,
  DigiLoaderSpinner,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import {
  InfoCardMultiHeadingLevel,
  InfoCardMultiType,
  LoaderSpinnerSize,
} from '@digi/arbetsformedlingen';

type AdsPresentationProps = {
  ads: Ad[];
  loading?: boolean;
};

export const AdsPresentation = ({
  ads,
  loading = false,
}: AdsPresentationProps) => {
  if (loading) {
    return (
      <DigiLoaderSpinner afSize={LoaderSpinnerSize.MEDIUM} afText="Laddar" />
    );
  }

  if (ads.length === 0) {
    return (
      <DigiTypography>
        <p>Inga annonser hittades.</p>;
      </DigiTypography>
    );
  }

  return (
    <>
      {ads.map((ad) => (
        <div key={ad.id}>
          <DigiInfoCardMulti
            // key={ad.id}
            afHeading={ad.headline}
            // afHeading={`${ad.headline} - ${ad.employer?.name}`}
            afHeadingLevel={InfoCardMultiHeadingLevel.H3}
            afType={InfoCardMultiType.RELATED}
            afLinkHref={`/ads/${ad.id}`}
          >
            <DigiTypography>
              <h3>{ad.employer?.name}</h3>
              {ad.workplace_address?.municipality &&
                ad.workplace_address?.region && (
                  <p style={{ marginBottom: '0' }}>
                    <strong>Plats:</strong> {ad.workplace_address.municipality}{' '}
                    , {ad.workplace_address.region}
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
        </div>
      ))}
    </>
  );
};
