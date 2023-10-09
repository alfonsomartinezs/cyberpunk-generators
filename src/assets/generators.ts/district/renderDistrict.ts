import { generateDistrict } from "./generateDistrict"

export const renderDistrict = () =>{
  const district = generateDistrict();
  const districtDisplay = document.getElementById('district-traits-display')!;

  for(let i = 0; i < district.length;i++){
    const nameElement = document.createElement("h4")
    nameElement.innerText = district[i].name
    districtDisplay.appendChild(nameElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = district[i].description
    districtDisplay.appendChild(descriptionElement);
   }
}