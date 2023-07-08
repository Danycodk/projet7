//export default function Section(){
 //   return<div>Content section </div>
//}
//import { useParams } from "react-router";
import React from 'react';
import   logo from "../../assets/images/IMG.png";
import   './HomePages.scss';
import {NavLink} from "react-router-dom";
import data from"../../data.json";
//import { useEffect } from "react";
function HomePages(){
    //const [records , setRecords] = useState([])
    

    //setRecords(data[0])
   // console.log(records)
    return (

    <section>
        <div className = "firstDiv" >
            <figure className='figureOneHOME'>
                <h1> Chez vous, partout et ailleurs</h1>
                <img src={logo} alt="" />
            </figure>
        </div >
        <div className='secondDivHOME'> 
        {data.map((chambre, index)=>(<NavLink to={`/chambre/${chambre.id}`}  key={index}>
                 <figure  className='figureSecond' >
            
            <img  src={chambre.cover}  alt="" />
            <figcaption>{chambre.title} </figcaption>
        </figure></NavLink>)) }
        </div>

    </section>
    )
        
}
export default HomePages;