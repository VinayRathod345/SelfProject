import "./RightButton.css";

import { BsFilter } from "react-icons/bs";
const RightButton = (props) => {
  function filterClickhandler() {
    props.OnSildebarfilter();
  }
  return (
    <div className="main-1">
      <div className='job-search-filter'>
        <div className='right-top-left'>
          <p>Career</p>
        </div>
        <div className='right-filter' onClick={filterClickhandler}>
          <BsFilter />

          <p>Filter</p>
        </div>
      </div>
    </div>

  );
}

export default RightButton;