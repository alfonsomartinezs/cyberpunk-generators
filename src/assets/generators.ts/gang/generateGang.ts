import { GangType, gangIncomes, gangNameElementList, gangNameElements, gangOrgElements, gangStyles } from "../../gangConstants"
import { LabelObject, corpEvents, corpGoals, corpStrengths, corpStyles } from "../../megacorpConstants"
import { getRandomFromArray } from "../helpers"

const generateGangName = () =>{
  const nameElementArray = getRandomFromArray(gangNameElements)
  const list = gangNameElementList[nameElementArray as keyof typeof gangNameElementList]
  const nameElement = getRandomFromArray(list)
  const corpElement = getRandomFromArray(gangOrgElements)

  return `${nameElement} ${corpElement}`
}

export const generateGang = (): GangType => {
  // generate one main focus
  const income = getRandomFromArray(gangIncomes)
  // generate 1 or more style
  const styles:LabelObject[] = []
  for(let i = 0; i < Math.ceil(Math.random()*3);i++){
    let newStyle = getRandomFromArray(gangStyles);
    while(styles.includes(newStyle)){
      newStyle = getRandomFromArray(corpStyles);
    }
   styles.push(newStyle)
  }
  // generate 1 strength
  const strength = getRandomFromArray(corpStrengths)
  // generate 1 corp event
  const event = getRandomFromArray(corpEvents)
  // generate 1 current goal
  const currentGoal = getRandomFromArray(corpGoals)
  // generate name
  const name = generateGangName();

  return {
    name,
    income,
    strength,
    styles,
    event,
    currentGoal,
  }
}

export const generateGangs = (numCorps:number = 1) =>{
  const corpList:GangType[] = []
  for(let i = 0; i < numCorps; i++){
    corpList.push(generateGang())
  }
  return corpList
}