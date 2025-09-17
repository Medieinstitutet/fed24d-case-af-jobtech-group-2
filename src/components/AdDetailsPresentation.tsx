import {
  DigiButton,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import type { AdExt } from '../models/AdExt';
import {
  ButtonSize,
  ButtonVariation,
  LayoutBlockVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen';

import {
  Wrapper,
  FlexContainer,
  LeftSection,
  RightSection,
  Divider,
  InfoSection,
} from "./styled/AdDetailsPresentationStyling";

interface Props {
  ad: AdExt;
}

export const AdDetailsPresentation = ({ ad }: Props) => {
  return (
    <>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <Wrapper>
          <DigiTypography afVariation={TypographyVariation.LARGE}>
            <h2>{ad.headline}</h2>
            <h3>{ad.employer.name}</h3>
          </DigiTypography>

          <DigiLayoutContainer af-margin-all>
            <FlexContainer>
              <LeftSection>
                <DigiTypography afVariation={TypographyVariation.SMALL}>
                  {(ad.workplace_address?.municipality ||
                    ad.workplace_address?.region) && (
                    <p>
                      <strong>Plats:</strong>{' '}
                      {ad.workplace_address?.municipality}
                      {ad.workplace_address?.municipality &&
                      ad.workplace_address?.region
                        ? ' i '
                        : ''}
                      {ad.workplace_address?.region}
                    </p>
                  )}

                  {ad.employment_type?.label && (
                    <p>
                      {ad.occupation_field?.label && (
                        <p>
                          <strong>Yrkesområde:</strong>{' '}
                          {ad.occupation_field.label}
                        </p>
                      )}
                      {ad.occupation_group?.label && (
                        <p>
                          <strong>Yrkesgrupp:</strong>{' '}
                          {ad.occupation_group.label}
                        </p>
                      )}
                      {ad.employment_type.label}
                    </p>
                  )}

                  {ad.working_hours_type?.label && (
                    <p>
                      <strong>Arbetstid:</strong> {ad.working_hours_type.label}
                    </p>
                  )}

                  <InfoSection bgColor="gray">
                    {ad.must_have?.work_experiences &&
                      ad.must_have.work_experiences.length > 0 && (
                        <p>
                          <strong>Yrkeserfarenhet krävs:</strong>
                          {ad.must_have.work_experiences.map((exp, i) => (
                            <div key={exp.label}>{exp.label}</div>

                          ))}
                        </p>
                      )}

                    {ad.nice_to_have?.work_experiences &&
                      ad.nice_to_have.work_experiences.length > 0 && (
                        <p>
                          <strong>Meriterande yrkeserfarenhet:</strong>

                          {ad.nice_to_have.work_experiences.map((exp, i) => (
                            <div key={exp.label}>{exp.label}</div>
                          ))}
                        </p>
                      )}

                    {typeof ad.driving_license_required === 'boolean' && (
                      <p>
                        <strong>Körkort krävs:</strong>{' '}
                        {ad.driving_license_required ? 'Ja' : 'Nej'}
                      </p>
                    )}
                  </InfoSection>

                  <InfoSection>
                    {ad.application_contacts?.length ? (
                      <p>
                        <strong>Kontaktperson</strong>
                        {ad.application_contacts.map((contact, index) => (
                          <div key={index}>
                            {contact.name && (
                              <p>
                                <strong>{contact.name}</strong>
                              </p>
                            )}
                            {contact.description && (
                              <p>{contact.description}</p>
                            )}
                            {contact.email && (
                              <p>
                                <strong>Email:</strong> {contact.email}
                              </p>
                            )}
                            {contact.telephone && (
                              <p>
                                <strong>Telefon:</strong> {contact.telephone}
                              </p>
                            )}
                          </div>
                        ))}
                      </p>
                    ) : null}
                  </InfoSection>

                  <InfoSection>
                    {ad.publication_date && (
                      <p>
                        <strong>Publicerad:</strong>{' '}
                        {new Date(ad.publication_date).toLocaleDateString()}
                      </p>
                    )}

                    {ad.application_deadline && (
                      <p>
                        <strong>Deadline:</strong>{' '}
                        {new Date(ad.application_deadline).toLocaleDateString()}
                      </p>
                    )}
                  </InfoSection>
                  {ad.application_details?.url && (
                    <div>
                      <DigiButton
                        afSize={ButtonSize.MEDIUM}
                        afVariation={ButtonVariation.PRIMARY}
                        afFullWidth={false}
                        onClick={() =>
                          window.open(ad.application_details!.url, '_blank')
                        }
                      >
                        Sök tjänsten
                      </DigiButton>
                    </div>
                  )}
                </DigiTypography>
              </LeftSection>

              <Divider />

              <RightSection>
                <DigiTypography afVariation={TypographyVariation.SMALL}>
                  <h4>Tjänstbeskrivning</h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: ad.description.text_formatted?.replace(
                        /\r?\n/g,
                        '<br />'
                      ), // ersätter radbrytningar
                    }}
                  ></p>
                </DigiTypography>
              </RightSection>
            </FlexContainer>
          </DigiLayoutContainer>
        </Wrapper>
      </DigiLayoutBlock>
    </>
  );
};
