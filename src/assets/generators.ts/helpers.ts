export const getRandomFromArray = (array:Array<any>) =>{
  const idx = Math.floor(Math.random() * array.length)
  return array[idx]
}

export const getMultipleRandomsfromArray = (array:Array<any>,numItmes:number = 2) =>{
  const results:Array<any> = []
  for(let i = 0; i < numItmes;i++){
    let newItem = getRandomFromArray(array);
    while(results.includes(newItem)){
      newItem = getRandomFromArray(array);
    }
   results.push(newItem)
  }
  return results
}