import { DigiNavigationPagination } from '@digi/arbetsformedlingen-react';
import { useAdContext } from '../hooks/useAdContext';

export const AdsPagination = () => {
  const { currentPage, setCurrentPage, totalResult } = useAdContext();
//  const totalPages = Math.ceil(totalResult / 10);
  const totalPages = totalResult > 0 ? Math.ceil(totalResult / 10) : 1;

  const startValue = (currentPage - 1) * 10 + 1;
  const endValue = Math.min(startValue + 9, totalResult);

  const handlePagination = (e: CustomEvent) => {
    if (e.detail === null) {
      setCurrentPage(1);
      return;
    } else {
      setCurrentPage(e.detail);
      console.log('pagination event:', e.detail);
    }
  };

  return (
    <DigiNavigationPagination
      afId="afPagination"
      afTotalPages={totalPages}
      afInitActive-page={1}
      afCurrentResultStart={startValue}
      afCurrentResultEnd={endValue}
      afTotalResults={totalResult}
      afResultName="annonser"
      onAfOnReady={handlePagination}
      onAfOnPageChange={handlePagination}
    ></DigiNavigationPagination>
  );
};
