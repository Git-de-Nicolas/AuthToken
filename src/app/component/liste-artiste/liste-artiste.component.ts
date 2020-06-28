import {Component, OnInit} from '@angular/core';
import {Artiste} from '../../entity/artiste.entity';
import {ArtisteService} from '../../service/artiste.service';

@Component({
  selector: 'app-liste-artiste',
  templateUrl: './liste-artiste.component.html',
  styleUrls: ['./liste-artiste.component.scss']
})
export class ListeArtisteComponent implements OnInit {

  artistes: Artiste[];

  constructor(private artisteService: ArtisteService) {
  }

  ngOnInit(): void {
    this.artisteService.getAllArtiste().subscribe(artistes => {
      this.artistes = artistes;
    });
  }

}
