import { WorldProblems } from "../../constants"
import { getRandomFromArray } from "../helpers"

export const generateWorld = () =>{
  //just need two problems
  const firstProblem = getRandomFromArray(WorldProblems)
  let secondProblem = getRandomFromArray(WorldProblems)
  while(firstProblem == secondProblem){
    secondProblem = getRandomFromArray(WorldProblems)
  }
  console.log([firstProblem,secondProblem])
  return [firstProblem,secondProblem]
}