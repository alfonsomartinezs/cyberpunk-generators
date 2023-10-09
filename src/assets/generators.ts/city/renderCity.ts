import { generateCity } from "./generateCity"

export const renderCity = () =>{
  const city = generateCity();
  const cityProblemsList = document.getElementById('city-problems-display')!;

  for(let i = 0; i < city.length;i++){
    const nameElement = document.createElement("h4")
    nameElement.innerText = city[i].name
    cityProblemsList.appendChild(nameElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = city[i].description
    cityProblemsList.appendChild(descriptionElement);
   }
}