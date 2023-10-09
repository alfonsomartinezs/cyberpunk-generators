import { MegaCorp } from "../../megacorpConstants";
import { generateMegaCorps } from "./generateMegaCorp";

export const renderMegacorps = () => {
  const corps = generateMegaCorps(4);
  console.log(corps)

  const corpDisplay = document.getElementById('megacorps-display')!;

  for(let i = 0; i < corps.length; i++){
    renderMegaCorp(corps[i],corpDisplay);
  }
}

const renderMegaCorp = (corp:MegaCorp,displayElement:HTMLElement) =>{
  console.log("emene: ",displayElement)
  const corpTitle = createTextElement('h2',corp.name)
  const corpFocus = createTextElement('p',`<strong>Focus</strong>: ${corp.focus}`)
  const corpStrength = createTextElement('p',`<strong>Strength</strong>: ${corp.strength}`)
  const corpEvent = createTextElement('p',`<strong>Recent Event</strong>: ${corp.corpEvent}`)
  const corpGoal = createTextElement('p',`<strong>Current Goal</strong>: ${corp.currentGoal}`)
  const styleList = document.createElement('ul')

  for(let i = 0; i < corp.styles.length; i++){
    const {name,description} = corp.styles[i]
    const listItem = (createTextElement('li',`<em>${name}</em>, ${description}`))
    styleList.appendChild(listItem)
  }

  displayElement.appendChild(corpTitle)
  displayElement.appendChild(corpFocus)
  displayElement.appendChild(createTextElement('p','<strong>Styles:</strong>'))
  displayElement.appendChild(styleList)
  displayElement.appendChild(corpStrength)
  displayElement.appendChild(corpEvent)
  displayElement.appendChild(corpGoal)
}

const createTextElement = (elementType:string,text:string) =>{
  const newElement = document.createElement(elementType)
  newElement.innerHTML = text
  return newElement
}