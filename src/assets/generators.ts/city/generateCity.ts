
import { CityProblems } from "../../constants";
import { getMultipleRandomsfromArray} from "../helpers"

export const generateCity = () =>{
  const problems = getMultipleRandomsfromArray(CityProblems,2);
  return problems
}