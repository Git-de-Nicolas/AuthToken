import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Artiste} from '../../entity/artiste.entity';
import {ArtisteService} from '../../service/artiste.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-add-artiste',
  templateUrl: './add-artiste.component.html',
  styleUrls: ['./add-artiste.component.scss']
})
export class AddArtisteComponent implements OnInit {

  artiste: Artiste = new Artiste();
  formSubmitted: Boolean = false;

  constructor(private artisteService: ArtisteService,
              private router: Router,
              private ngxLoader: NgxUiLoaderService) {
  }

  ngOnInit(): void {
  }

  addArtiste(form: NgForm) {
    this.formSubmitted = true;
    this.ngxLoader.start();
    this.artisteService.addArtiste(this.artiste).subscribe(() => {
      Swal.fire('l\'Artiste a bien été ajouté');
      this.router.navigate(['/']);
      this.ngxLoader.stop();
    });
  }
}
