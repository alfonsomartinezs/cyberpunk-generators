import { generateWorld } from "./generateWorld"

export const renderWorld = () =>{
  const worldProblems = generateWorld();
  const worldlist = document.getElementById('world-problems-display')!;
  
  for(let i = 0; i < worldProblems.length;i++){
    const nameElement = document.createElement("h4")
    nameElement.innerText = worldProblems[i].name
    worldlist.appendChild(nameElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = worldProblems[i].description
    worldlist.appendChild(descriptionElement);
   }


}