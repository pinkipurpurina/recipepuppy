import { BoilVolume } from "./boilVolume"
import { Ingredients } from "./ingredients"
import { Method } from "./method"
import { Volume } from "./volume"

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






