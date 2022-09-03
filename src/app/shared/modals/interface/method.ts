import { Fermentation } from "./fermentation";
import { MashTemp } from "./mashTemp";

export interface Method {
  fermentation: Fermentation,
  mash_temp: Array<MashTemp>,
  twist:string
}
