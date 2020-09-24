import './styles.scss'
import React from "react";
const Modal = ({day,month,week}) => {
    
  return (
      <>
   
    
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <label className="modal-label">Month
              <input className="modal-input" readOnly type="text" name="month" value={month}/>
            </label>
            <label className="modal-label">Day
              <input className="modal-input" readOnly type="text" name="day" value={`${day}th ${week}`}/>
            </label>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export { Modal };
