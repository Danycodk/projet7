import "./chambre.scss" ;
import { useParams } from "react-router-dom";
import data from "../../data.json"
//import { useEffect } from "react";
import React, { useState } from 'react';
//import { useState  } from 'react';
import ErrorPage from "../errorPage/errorPage" ;
function Chambre(){
//    const [records , setRecords] = useState()
    const {id} = useParams();
    const chambreSelect = data.find((element => element.id === id ))
    const imagePictures = chambreSelect.pictures ;
    //console.log(imagePictures)
//console.log("voici l", id )
    const tagsNumber = chambreSelect.tags ;


    const ratingAlgo = chambreSelect.rating 
    //quoi qu il arrive il ya 5 etoiles qu on veut , il faut juste 
    const totalRating= [1,2,3,4,5] ;
    console.log("quelle la note de cette chambre",totalRating)
    //les etoiles qui sont des chiffres , inferieur aux RATING(un nombre) seront par la suite plus bas MAP() et colorer en rouge
    const etoileRouge = totalRating.filter( oneStar => oneStar <= ratingAlgo);
    // l inverse/ superirur colorer en gris 
    const etoileGris = totalRating.filter( oneStar => oneStar > ratingAlgo);

console.log("nombre d etoile rouge ",etoileRouge,"/n et il y a ",etoileGris)
const [currentValue, setCurrentValue] = useState(0);

const clickRigth = () => {
    setCurrentValue(currentValue + 1)
    if(currentValue === imagePictures.length - 1){
        setCurrentValue(0)
    }
}

const clickLeft = () => {
    setCurrentValue(currentValue - 1)
    if(currentValue === 0){
        setCurrentValue(imagePictures.length - 1)
    }
    
}
//console.log(imagePictures.currentValue)
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
const [descriptionHide,setDescriptionHide] = useState(false);

const showDescription = () =>{
    setDescriptionHide(!descriptionHide);
}
//////////////////////////////////////////////////////////
const [descriptionHideSecond,setDescriptionHideSecond] = useState(false);

const showDescriptionSecond = () =>{
    setDescriptionHideSecond(!descriptionHideSecond);
}
/////////////////////////////////////////////////////////
const upDownIcon = descriptionHide ? "" : "down" ;
const upDownIconSecond = descriptionHideSecond ? "" : "down" ;
const equipement = chambreSelect.equipments ;
//const equipement = chambreSelect.equipments ;
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

    return (
        <>
        {chambreSelect ? (
            <section>
            <div > 
               <figure className="figureOne">
               <i className="fa-solid fa-chevron-left" onClick={() => clickRigth()}> </i>
               <i className="fa-solid fa-angle-right" onClick={() => clickLeft()} > </i>
               <img src={imagePictures[currentValue]} alt="" />
               </figure>
               <div>
                   <h1> {chambreSelect.title}</h1>
                   <p>{chambreSelect.location}</p>
                       <ul>
                        {tagsNumber.map((oneLi)=>(<li> {oneLi}</li>)) }
                       </ul>
               </div>
               <div className="etoileProfil">
                   <div >
                       <figure>
                       <figcaption> {chambreSelect.host.name}</figcaption>
                       <img src={chambreSelect.host.picture} alt=""></img>
                   </figure>
                   </div>
                   <div>
                   {etoileRouge.map((oneStar)=>(<i className="fa-solid fa-star starRed"></i>))}
                   {etoileGris.map((oneStar)=>(<i className="fa-solid fa-star etoileColor"></i>))}
                   </div>
               </div>
               <div className="equipemntDescription">
                   <div className='barreRouge'>          
                        <h2 onClick={() => showDescription()}> equipement <i className={`fa-solid fa-chevron-down upDown ${upDownIcon}`}></i></h2>
                        {descriptionHide && equipement.map((element)=>(<p> {element}</p>)) }
                    </div>
                    <div className='barreRouge'>          
                        <h2 onClick={() => showDescriptionSecond()}> Description <i className={`fa-solid fa-chevron-down upDown ${upDownIconSecond}`}></i></h2>
                        {descriptionHideSecond && <p> {chambreSelect.description }</p> }
                    </div>
               </div> 
               </div>             
           </section>
        )
        :(<ErrorPage/>)
        }
       
    </>
    )
    }
export default Chambre ; 