import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Artiste} from '../../entity/artiste.entity';
import {ArtisteService} from '../../service/artiste.service';
import {NgForm} from '@angular/forms';
import {SecurityService} from '../../service/security.service';

@Component({
  selector: 'app-edit-artiste',
  templateUrl: './edit-artiste.component.html',
  styleUrls: ['./edit-artiste.component.scss']
})
export class EditArtisteComponent implements OnInit {

  artiste: Artiste;
  formSubmitted = false;

  constructor(private artisteService: ArtisteService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private securityService: SecurityService) {

  }

  ngOnInit(): void {
    const artisteID = this.activatedRoute.snapshot.paramMap.get('id');
    this.artisteService.getOneArtiste(artisteID).subscribe(value => {
      this.artiste = value;
    });
  }

  editArtiste(form: NgForm) {
    this.formSubmitted = true;
    if (form.invalid) {
      return;
    }
    this.artisteService.editArtiste(this.artiste).subscribe(() => {
      alert('Artiste modifié, retour vers la page accueil');
      this.router.navigate(['/']);
    });
  }

  deleteArtiste() {
    this.artisteService.deleteArtiste(this.artiste).subscribe(() => {
      alert('Artiste supprimé, redirection vers la page Accueil');
      this.router.navigate(['/']);
    });
  }
}
