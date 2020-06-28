import {Component, OnInit} from '@angular/core';
import {Concert} from '../../entity/concert.entity';
import {ConcertService} from '../../service/concert.service';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-concert',
  templateUrl: './add-concert.component.html',
  styleUrls: ['./add-concert.component.scss']
})
export class AddConcertComponent implements OnInit {

  concert: Concert = new Concert();
  formSubmitted: Boolean = false;

  constructor(private concertService: ConcertService,
              private router: Router,
              private ngxLoader: NgxUiLoaderService) {
  }

  ngOnInit(): void {
  }

  addConcert(form: NgForm) {
    this.formSubmitted = true;
    this.ngxLoader.start();
    this.concertService.addConcert(this.concert).subscribe(() => {
      Swal.fire('Le Concert a bien été ajouté');
      this.router.navigate(['/']);
      this.ngxLoader.stop();
    });
  }
}
