export interface Recipe {
  abv: number,
  attenuation_level: number,
  boil_volume: BoilVolume,
  brewers_tips: string,
  contributed_by: string
  description: string,
  ebc: number
  first_brewed: Date
  food_pairing: Array<string>
  ibu: number,
  id: number,
  image_url: string,
  ingredients: Ingredients,
  method: Method
  name: string,
  ph: number,
  srm: number,
  tagline: string,
  target_fg: number,
  target_og: number,
  volume: Volume
}
export interface BoilVolume{
unit:string,
value:string
}
export interface Volume{
  value:number,
  unit:string
}
export interface Method {
  fermentation: Fermentation,
  mash_temp: MashTemp
}
export interface MashTemp{
  duration:number,
  temp:Temp,
  twist:any
}
export interface Temp{
  unit:string,
  value:number
}
export interface Fermentation { }

export interface Ingredients {
  malt: Malt,
  hops: Hops,
  yeast: string
}
export interface Malt {
  amount: Amount,
  name: string,
}

export interface Amount {
  unit: string,
  value: number,
}
export interface Hops {
  add: string,
  amount: Amount,
  name: string
}
