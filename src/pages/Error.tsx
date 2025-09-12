import { ErrorPageStatusCodes } from '@digi/arbetsformedlingen';
import {
  DigiNotificationErrorPage,
  DigiLinkInternal,
} from '@digi/arbetsformedlingen-react';

// Visar samma felsida oavsett typ av fel?
export const Error = () => {
  return (
    <DigiNotificationErrorPage
      afHttpStatusCode={ErrorPageStatusCodes.FORBIDDEN}
    >
      <ul slot="links">
        <li>
          <DigiLinkInternal afHref="/" afVariation="small">
            Till startsidan
          </DigiLinkInternal>
        </li>
        {/* Lägg till fler länkar eventuellt */}
        {/* <li>
          <DigiLinkInternal afHref="/" afVariation="small">
            Till startsidan
          </DigiLinkInternal>
        </li> */}
      </ul>
    </DigiNotificationErrorPage>
  );
};
