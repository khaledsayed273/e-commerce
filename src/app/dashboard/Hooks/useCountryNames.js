"use client"
import { useState, useEffect } from 'react';
import { httpGet } from 'next-basics';
import enUS from '../../lib/en-US.json';

const countryNames = {
  'en-US': enUS,
};

export function useCountryNames(locale) {
  const [list, setList] = useState(countryNames[locale] || enUS);    
  async function loadData(locale) {
    const { data } = await httpGet(`${process.env.basePath || ''}/intl/country/${locale}.json`);

    if (data) {
      countryNames[locale] = data;
      setList(countryNames[locale]);
    } else {
      setList(enUS);
    }
  }

  useEffect(() => {
    if (!countryNames[locale]) {
      loadData(locale);
    } else {
      setList(countryNames[locale]);
    }
  }, [locale]);

  return { countryNames: list };
}

export default useCountryNames;