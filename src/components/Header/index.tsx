import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';


import { CgDarkMode } from 'react-icons/cg'

import { DarkUsePlayer } from '../../contexts/DarkThemeContext';

import styles from './styles.module.scss';


export function Header() {
  const {
    darkTheme,
    isDark,
  } = DarkUsePlayer();

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <header className={isDark ? styles.darkHeaderContainer : styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>

      <span><CgDarkMode onClick={darkTheme} className={styles.darkModeButton} /></span>

    </header>
  );
}