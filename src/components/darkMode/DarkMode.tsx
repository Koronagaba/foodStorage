import { useEffect } from 'react';
import './DarkMode.css';

const DarkMode = () => {
  useEffect(() => {
    storageTheme = 'dark';
    localStorage.setItem('theme', storageTheme);
  }, []);

  let storageTheme = localStorage.getItem('theme');

  const toggleTheme = () => {
    if (storageTheme === 'dark') {
      document.body.classList.remove('dark');
      storageTheme = 'light';
    } else {
      document.body.classList.add('dark');
      storageTheme = 'dark';
    }

    localStorage.setItem('theme', storageTheme);
  };

  if (storageTheme === 'dark') {
    document.body.classList.add('dark');
  }

  return (
    <button onClick={toggleTheme} className="toggle-theme">
      <div className="icon-theme"></div>
    </button>
  );
};

export default DarkMode;
