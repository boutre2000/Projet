import * as AiIcons from 'react-icons/ai';


const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName} style={{backgroundColor: 'transparent'}}>
        <section className="modal-main">
        <AiIcons.AiOutlineCloseCircle onClick={handleClose}   style={{position: 'absolute', left: '1200px', top:'29px'}}/>
          {children}
          
           
        </section>
      </div>
    );
  };