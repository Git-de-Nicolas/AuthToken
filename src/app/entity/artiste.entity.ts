import {Concert} from './concert.entity';


export class Artiste {
  id:number;
  nom: string;
  biographie: string;
  artiste_id: number | Concert;
}
