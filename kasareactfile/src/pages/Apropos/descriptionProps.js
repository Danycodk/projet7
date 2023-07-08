import React, { useState  } from 'react';
function DescriptionProps(props){
    const [descriptionHide,setDescriptionHide] = useState(false);

    const showDescription = () =>{
        setDescriptionHide(!descriptionHide);
    }
const upDownIcon = descriptionHide ? "downrotate" : "" ;

    return (
        <div className='barreRouge'>          
            <h2 onClick={() => showDescription()}>{props.title} <i className={`fa-solid fa-chevron-down upDown ${upDownIcon}`}></i></h2>
            {descriptionHide &&<p>{props.descripTitle}  </p>}         
        </div>
    )
}
export default DescriptionProps ;