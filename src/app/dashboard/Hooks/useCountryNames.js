"use client"
import { useState, useEffect } from 'react';
import enUS from '../../lib/en-US.json';

const countryNames = {
  'en-US': enUS,
};

export function useCountryNames(locale) {
  const [list, setList] = useState(countryNames[locale] || enUS);

  async function loadData(locale) {
    try {
      const response = await fetch(
        `${process.env.basePath || ""}/intl/country/${locale}.json`
      );

      if (response.ok) {
        const data = await response.json();
        countryNames[locale] = data;
        setList(countryNames[locale]);
      } else {
        console.error(`Failed to load data for locale: ${locale}`);
        setList(enUS);
      }
    } catch (error) {
      console.error("Error loading country names:", error);
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