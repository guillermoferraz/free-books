import React from 'react';
import {isMobile} from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18n';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>Home component</h1>
      {isMobile ? <h1>Is mobile</h1> : <h1>Not is Mobile</h1>}
      <h1>{t('test')}</h1>
    </div>
  )
}
export default Home;