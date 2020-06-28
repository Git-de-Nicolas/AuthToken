import {Component, OnInit} from '@angular/core';
import {Concert} from '../../entity/concert.entity';
import {ConcertService} from '../../service/concert.service';

@Component({
  selector: 'app-liste-concert',
  templateUrl: './liste-concert.component.html',
  styleUrls: ['./liste-concert.component.scss']
})
export class ListeConcertComponent implements OnInit {

  concerts: Concert[];

  constructor(private concertService: ConcertService) {
  }

  ngOnInit(): void {
    this.concertService.getAllConcert().subscribe(concerts => {
      this.concerts = concerts;
    });
  }

}
