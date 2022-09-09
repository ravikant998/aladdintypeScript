import React, { useRef, useState } from 'react'
import EditReviewList from './EditReviewList';

const ReviewCat = ({ getrewview }) => {
    const dropdownref = useRef<HTMLDivElement>(null)
    const [showMenu, setShowMenu] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const showMenuHandler = () => {
        setShowMenu(true)
        if(showMenu){
            setShowMenu(false)
        }
    }
    const showEditModalHandler = () => {
        setShowEditModal(true)
        if(showEditModal){
            setShowEditModal(false)
        }
    }
    // Close dropDown outSideClick
     const handleClickOutSideDropdown=(e:any)=>{
        if(showMenu && !dropdownref.current?.contains(e.target)){
            setShowMenu(false)
      }
      }
      window.addEventListener("click",handleClickOutSideDropdown)

    return (
        <div className="menu-wrap" ref={dropdownref}>
            <button className="menu-btn" onClick={() => showMenuHandler()}>
                <span className="btn-dot"></span>
                <span className="btn-dot"></span>
                <span className="btn-dot"></span>
            </button>
            {showMenu ? (
                <div className="menu">
                    <ul className="menu-items">
                        <li>
                            <button onClick={showEditModalHandler} className="menu-option">
                                Edit
                            </button>
                        </li>
                        <li>
                            <button className="menu-option delete" >
                                Delete
                            </button>
                        </li>
                    </ul>
                </div>
            ) : null
            }
            {showEditModal ? (
                <EditReviewList
                getreview={getrewview}
                setShowMenu={setShowMenu}
                setShowEditModal={setShowEditModal}
                />
            ) : null}
        </div>

    )
}

export default ReviewCat