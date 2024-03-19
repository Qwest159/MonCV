import './style.css'
import cv from "./cv.json";
const donnees_personelles = cv.Donnees_personnelles.map((comp) => {return `<li>${comp}</li>`}).join("")
const mes_valeurs = cv.Mes_valeurs.map((comp) => {return `<li>${comp}</li>`}).join("")
const hobby = cv.Hobby.map((comp) => {return `<li>${comp}</li>`}).join("")
const formations = cv.Formations.map((comp) => {return `<li>${comp}</li>`}).join("")
const experience = cv.Experience.map((comp) => {return `<li>${comp}</li>`}).join("")
const atouts = cv.Atouts.map((comp) => {return `<li>${comp}</li>`}).join("")
const image = cv.ima
document.querySelector('#app').innerHTML =

`

<div id="Block">
      <div id="ENTETE">
        <img src=${image} alt=""> 
         <em>${cv.nom} ${cv.prenom}</em><br>                             
         <em>${cv.metier}</em> 
      </div>

          <section>
            
            <div id="BlocGauche">
              <h2>Données personnelles</h2>
              <ul>
                ${donnees_personelles}
              </ul>

              <h2>Mes valeurs</h2>
              <ul>
               ${mes_valeurs}
              </ul>
              
              <h2> Hobby </h2>
              <ul>
              ${hobby}
              </ul>
    
             </div>
              
              <div id="BlocDroit">
                <h2>Formations</h2>
                <ul>
                ${formations}
                </ul>

                <h2>Expériences professionnelles
                </h2>
                <ul>
                ${experience}
                </ul>
              
                <h2>Atouts</h2>
                <ul>
                ${atouts}
                </ul>
                
              </div>
            </section>
</div>

`

