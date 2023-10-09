import { DistrictTraits } from "../../constants"
import { getMultipleRandomsfromArray } from "../helpers"

export const generateDistrict = () =>{
  const traits = getMultipleRandomsfromArray(DistrictTraits,2)
  return traits
}