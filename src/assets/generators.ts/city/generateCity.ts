
import { CityProblems } from "../../constants";
import { getMultipleRandomsfromArray} from "../helpers"

export const generateCity = () =>{
  const problems = getMultipleRandomsfromArray(CityProblems);
  console.log("problems: ",problems)
  return problems
}