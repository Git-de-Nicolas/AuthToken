import {Component, OnInit} from '@angular/core';
import {Concert} from '../../entity/concert.entity';
import {ConcertService} from '../../service/concert.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Artiste} from '../../entity/artiste.entity';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-edit-concert',
  templateUrl: './edit-concert.component.html',
  styleUrls: ['./edit-concert.component.scss']
})
export class EditConcertComponent implements OnInit {

  concert: Concert;
  types: Artiste[];
  formSubmitted = false;

  constructor(private concertService: ConcertService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private ngxLoader: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    const concertID = this.activatedRoute.snapshot.paramMap.get('id');
    this.concertService.getOneConcert(concertID).subscribe(value => {
      this.concert = value;
    });

    this.concertService.getAllTypes().subscribe(value => {
      this.types = value;
    });
  }

  editConcert(form: NgForm) {
    this.formSubmitted = true;
    if (form.invalid) {
      return;
    }
    this.ngxLoader.start();
    this.concertService.editConcert(this.concert).subscribe(() => {
      alert('Concert modifié, retour vers la page Accueil');
      this.router.navigate(['/']);
      this.ngxLoader.stop();
    });
  }

  deleteConcert() {
    this.concertService.deleteConcert(this.concert).subscribe(() => {
      alert('Concert supprimé, redirection vers la page Accueil');
      this.router.navigate(['/']);
    });
  }
}
