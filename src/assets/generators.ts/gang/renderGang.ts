import { GangType } from "../../gangConstants"
import { generateGangs } from "./generateGang"

const renderGang = (gang:GangType,displayElement:HTMLElement) =>{
  const corpTitle = createTextElement('h2',gang.name)
  const corpFocus = createTextElement('p',`<strong>Main Income Source</strong>: ${gang.income}`)
  const corpStrength = createTextElement('p',`<strong>Strength</strong>: ${gang.strength}`)
  const corpEvent = createTextElement('p',`<strong>Recent Event</strong>: ${gang.event}`)
  const corpGoal = createTextElement('p',`<strong>Current Goal</strong>: ${gang.currentGoal}`)
  const styleList = document.createElement('ul')

  for(let i = 0; i < gang.styles.length; i++){
    const {name,description} = gang.styles[i]
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

export const renderGangs = () => {
  const gangs = generateGangs(4);

  const gangDisplay = document.getElementById('gangs-display')!;

  for(let i = 0; i < gangs.length; i++){
    renderGang(gangs[i],gangDisplay);
  }
}

