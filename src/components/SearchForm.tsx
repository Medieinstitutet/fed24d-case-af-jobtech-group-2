import { useState } from 'react';
import {
  LayoutContainerVariation,
  FormInputSearchVariation,
  FormInputType,
  ButtonType,
} from '@digi/arbetsformedlingen';
import {
  DigiLayoutContainer,
  DigiFormInputSearch,
  DigiFormFilter,
} from '@digi/arbetsformedlingen-react';
import { getAds } from '../services/adService';
import { useAdContext } from '../contexts/useAdContext';

export const SearchForm = () => {
  const { setAds, searchQuery, setSearchQuery, setLoading, setError } =
    useAdContext(); // Custom hook for context
  const [userInput, setUserInput] = useState(searchQuery);

  const handleSearch = async (e: CustomEvent<string>) => {
    const searchValue = e.detail;
    setLoading(true);
    setSearchQuery(searchValue);
    setError(null);

    try {
      const results = await getAds(searchValue);
      setAds(results);
    } catch (err) {
      console.error(err);
      setError('Något gick fel, försök igen.');
    } finally {
      // setUserInput(''); // Should search input be cleared or not after search?
      setLoading(false);
    }
  };

  const handleInput = (e: CustomEvent) => {
    const value = (e.detail.target as HTMLInputElement).value || '';
    if (value.length > 50) return; // Ignore too long input
    setUserInput(value);
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
          afValue={userInput}
          onAfOnSubmitSearch={handleSearch}
          onAfOnInput={handleInput}
          //   onAfOnInput={(e: CustomEvent) => {
          //     const inputValue =
          //       (e.detail.target as HTMLInputElement).value || ''; // e.detail = payload from Af component
          //     setUserInput(inputValue);
          //   }}
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
    </>
  );
};
