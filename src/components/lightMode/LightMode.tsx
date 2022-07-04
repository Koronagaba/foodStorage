import './LightMode.css';

const LightMode = () => {

  const toggleTheme = () => {
    document.body.classList.toggle('dark')
  }

  return (
    <button onClick={toggleTheme} className="toggle-theme">
      <div className="icon-theme"></div>
    </button>
  );
};

export default LightMode;
