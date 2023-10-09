import { LabelObject, MegaCorp, corpElements, corpEvents, corpFoci, corpGoals, corpStrengths, corpStyles, nameElementList, nameElements } from "../../megacorpConstants";
import { getRandomFromArray } from "../helpers";

const generateCorpName = () =>{
  const nameElementArray = getRandomFromArray(nameElements)
  const list = nameElementList[nameElementArray as keyof typeof nameElementList]
  const nameElement = getRandomFromArray(list)
  const corpElement = getRandomFromArray(corpElements)

  return `${nameElement} ${corpElement}`
}

export const generateMegaCorp = (): MegaCorp => {
  // generate one main focus
  const focus = getRandomFromArray(corpFoci)
  // generate 1 or more style
  const styles:LabelObject[] = []
  for(let i = 0; i < Math.ceil(Math.random()*3);i++){
    let newStyle = getRandomFromArray(corpStyles);
    while(styles.includes(newStyle)){
      newStyle = getRandomFromArray(corpStyles);
    }
   styles.push(newStyle)
  }
  // generate 1 strength
  const strength = getRandomFromArray(corpStrengths)
  // generate 1 corp event
  const corpEvent = getRandomFromArray(corpEvents)
  // generate 1 current goal
  const currentGoal = getRandomFromArray(corpGoals)
  // generate name
  const name = generateCorpName();

  console.log(styles)

  return {
    name,
    focus,
    strength,
    styles,
    corpEvent,
    currentGoal,
  }
}

export const generateMegaCorps = (numCorps:number = 1) =>{
  const corpList:MegaCorp[] = []
  for(let i = 0; i < numCorps; i++){
    corpList.push(generateMegaCorp())
  }
  return corpList
}