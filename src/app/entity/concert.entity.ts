import {Artiste} from './artiste.entity';

export class Concert {
  id: number;
  artiste_id: number;
  date: any;
  heure: any;
  duree: number;
  dateConcert: string;
  heureConcert: string;
  // artiste: string | Artiste;
}
