
import "./HeaderBar.css"
import logo from './image.png'

const HeaderBar = (props) => {
  const handleClick = event => {
    props.OnCloseClicked(true);

  };
  return (
    <div className="topnav">

      <div className="logo-container">
        <img className="logo" src={logo} alt="logo"></img>
        <p className="header-title">JOB PORTAL</p>
      </div>

      <div className="search-container">
      <button type="submit" onClick={handleClick}>Create new job</button>
      </div>
    </div>
  );
};

export default HeaderBar;