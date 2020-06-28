import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Artiste} from '../entity/artiste.entity';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {

  constructor(private http: HttpClient) {
  }

  // RECUPERER LA LISTE DES ARTISTES
  getAllArtiste(): Observable<Artiste[]> {
    return this.http.get<Artiste[]>(environment.apiPrefix + '/artiste');
  }

  // RECUPERER UN ARTISTE
  getOneArtiste(id): Observable<Artiste> {
    return this.http.get<Artiste>(environment.apiPrefix + '/artiste/' + id);
  }

  // AJOUTER UN ARTISTE
  addArtiste(artiste: Artiste) {
    return this.http.post(environment.apiPrefix + '/artiste', artiste);
  }

  // MODIFIER UN ARTISTE
  editArtiste(artiste: Artiste) {
    return this.http.put(environment.apiPrefix + '/artiste/' + artiste.id, artiste);
  }

  // SUPPRIMER UN ARTISTE
  deleteArtiste(artiste: Artiste) {
    return this.http.delete(environment.apiPrefix + '/artiste/' + artiste.id);
  }

  // TEST


}
