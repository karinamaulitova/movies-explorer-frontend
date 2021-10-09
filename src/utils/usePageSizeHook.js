import { useState, useEffect }  from 'react';

export function usePageSize() {
    const [pageSize, setPageSize] = useState('s');
  
    useEffect(() => {
      const mobileQuery = window.matchMedia('(max-width: 767px)');
      const tabletQuery = window.matchMedia('(max-width: 1279px)');
  
      const listener = () => {
        if (mobileQuery.matches) {
          setPageSize('s');
        } else if (tabletQuery.matches) {
          setPageSize('m');
        } else {
          setPageSize('l');
        }
      };
      listener();
  
      mobileQuery.addEventListener('change', listener);
      tabletQuery.addEventListener('change', listener);
  
      return () => {
        mobileQuery.removeEventListener('change', listener);
        tabletQuery.removeEventListener('change', listener);
      };
    }, []);
  
    return pageSize
  }