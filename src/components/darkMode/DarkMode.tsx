import './DarkMode.css';

const DarkMode = () => {
  const body = document.body;

  let storageTheme = localStorage.getItem('theme');

  const toggleTheme = () => {
    if (storageTheme === 'dark') {
      body.classList.remove('dark');
      storageTheme = 'light';
    } else {
      body.classList.add('dark');
      storageTheme = 'dark';
    }

    localStorage.setItem('theme', storageTheme);
  };

  if (storageTheme === 'dark') {
    body.classList.add('dark');
  }

  return (
    <button onClick={toggleTheme} className="toggle-theme">
      <div className="icon-theme"></div>
    </button>
  );
};

export default DarkMode;
