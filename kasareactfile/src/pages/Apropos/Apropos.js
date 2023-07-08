import "./Apropos.scss";
import   logobackground from "../../assets/images/aproposbackground.png";
//import React, { useState  } from 'react';
import DescriptionProps from "./descriptionProps";
function Apropos(){
        
    return (
        <section>

            <figure className='figureApropos'>
                <img src={logobackground} alt="" />
            </figure>
            <DescriptionProps title="Fiabilité" 
            descripTitle=" Les annonces postées sur Kasa 
            garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, 
            et toutes les informations sont régulièrement 
                vérifiées  par nos équipes."/>
            <DescriptionProps title="Respect" 
            descripTitle="La bienveillance fait partie des valeurs
            fondatrices de Kasa. Tout comportement 
            discriminatoire ou de perturbation du
             voisinage entraînera une exclusion de 
             notre plateforme."/>
            <DescriptionProps title="Service" 
            descripTitle="Nos équipes se tiennent à votre disposition
            pour vous fournir une expérience parfaite. 
            N'hésitez pas à nous contacter si vous avez 
            la moindre question."/>
            <DescriptionProps title="Sécurité" 
            descripTitle="La sécurité est la priorité de Kasa. Aussi bien 
            pour nos hôtes que pour les voyageurs, chaque 
            logement correspond aux critères de sécurité établis
             par nos services. En laissant une note aussi bien à
              l'hôte qu'au locataire, cela permet à nos équipes 
              de vérifier que les standards sont bien respectés.
               Nous organisons également des ateliers sur la
                sécurité domestique pour nos hôtes."/>
            
        </section>
    )
}

export default Apropos ;