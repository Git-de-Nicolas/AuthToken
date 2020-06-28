import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Concert} from '../entity/concert.entity';
import {environment} from '../../environments/environment';
import {Artiste} from '../entity/artiste.entity';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private http: HttpClient) {
  }

  // RECUPERER LA LISTE DES CONCERTS
  getAllConcert(): Observable<Concert[]> {
    return this.http.get<Concert[]>(environment.apiPrefix + '/concert');
  }

  // RECUPERER UN CONCERT
  getOneConcert(id): Observable<Concert> {
    return this.http.get<Concert>(environment.apiPrefix + '/concert/' + id);
  }

  // AJOUTER UN CONCERT
  addConcert(concert: Concert) {
    return this.http.post(environment.apiPrefix + '/concert', concert);
  }

  // MODIFIER UN CONCERT
  editConcert(concert: Concert) {
    return this.http.put(environment.apiPrefix + '/concert/' + concert.id, concert);
  }

  // SUPPRIMER UN CONCERT
  deleteConcert(concert: Concert) {
    return this.http.delete(environment.apiPrefix + '/concert/' + concert.id);
  }

  getAllTypes(): Observable<Artiste[]> {
    return this.http.get<Artiste[]>(environment.apiPrefix + '/artiste');
  }

}
