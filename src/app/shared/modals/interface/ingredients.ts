import { Hops } from "./hops";
import { Malt } from "./malt";

export interface Ingredients {
  malt: Array<Malt>,
  hops: Array<Hops>,
  yeast: string
}
