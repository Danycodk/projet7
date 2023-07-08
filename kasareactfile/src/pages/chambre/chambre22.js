import "./chambre.scss" ;
//import {  useParams} from "react-router-dom";
//import data from"../../data.json";
import { useSearchParams } from 'react-router-dom' ;


import { useEffect } from "react";
import React, { useState  } from 'react';
function Chambre22(){
    const [records , setRecords] = useState([])

    const [searchParams] = useSearchParams();
    const [id] = (searchParams.get('id'))

    useEffect(() =>{
         function fetchDta(){
            // Lancer votre serveur Live fait attention ceux qu il soient pareille que mon url en bas sinon ADAPTER
            fetch(`http://127.0.0.1:5501/kasareactfile/public/data.json`+id)
            .then ((response) => response.json() )
            .then ((data)=> setRecords(data)) 
            .catch((error)=> console.log(error)) 
        }
        fetchDta();
    }, [id]);
    console.log(records)
    const chambreSelect= records.find(chambre=>chambre.id === id)
    console.log(chambreSelect.id)
    if (!chambreSelect) return(<h1> ...Loader </h1>)

    return (
        <>
        <section>
         <div  key={chambreSelect.id}> 
            <figure className="figureOne">
            <img src={chambreSelect.pictures[0]} alt="" />
            </figure>
            <div>
                <h1> {chambreSelect.title}</h1>
                <figure>
                    <figcaption></figcaption>
                    <img src="" alt=""></img>
                </figure>
            </div>
            <div>
                <div>
                    <p>Location</p>
                    <u>
                        <li></li>
                        <li></li>
                        <li></li>
                    </u>
                </div>
                <p></p>
            </div>
            <div>
                <div>
                    <h2>f</h2>
                </div>
                <div>
                    <h2>f</h2>
                </div>
            </div> 
            </div>             
        </section>
    </>
    )
}
export default Chambre22 ; 



export default function Slider({ data }) {
    const [currentImg, setCurrentImg] = useState(0);

    const handlePrev = () => {
        setCurrentImg(img => (img - 1 + data.pictures.length) % data.pictures.length)
    }
    const handleNext = () => {
        setCurrentImg(img => (img + 1) % data.pictures.length)
    }

  return (
    <div className="slider">
        <img src={data.pictures[currentImg]} className="slider-img" alt={data.title}/>
        {data.pictures.length > 1 &&
        <>
        <i className="fa-solid fa-chevron-left" onClick={() => handlePrev()}></i>
        <i className="fa-solid fa-chevron-right" onClick={() => handleNext()}></i>