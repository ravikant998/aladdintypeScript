import React from 'react'
 import spinner from 'assets/images/spinner.svg'

const Loader = () => {
  return (
    <div className="modal-backdrop loader-modal">
         <img 
        //  src={spinner} 
         alt="spinner" 
         className="loader" 
         style={{width: '120px', 
         height: '120px', 
         margin: '0 auto -25px'}}/>
      Loading...
        </div>
  )
}

export default Loader

// /home/sis075/aladdintypescript/src/assets/images/spinner.svg