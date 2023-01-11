import './DarkMode.css';

const DarkMode = () => {
  const body = document.body;

  let storageTheme = localStorage.getItem('theme');

  const toggleTheme = () => {
    if (storageTheme === 'light') {
      body.classList.remove('light');
      storageTheme = 'dark';
    } else {
      body.classList.add('light');
      storageTheme = 'light';
    }

    localStorage.setItem('theme', storageTheme);
  };

  if (storageTheme === 'light') {
    body.classList.add('light');
  }

  return (
    <button onClick={toggleTheme} className="toggle-theme">
      <div className="icon-theme"></div>
    </button>
  );
};

export default DarkMode;
