import {Component, OnInit} from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    anime.timeline({loop: true})
      .add({targets: '.ml8 .letters-left', scale: [0, 1], duration: 2400,})
      .add({targets: '.ml8 .bang', scale: [0, 1], rotateZ: [45, 15], duration: 2400,})
      .add({targets: '.ml8', opacity: 0, duration: 2000, easing: 'easeOutExpo', delay: 2800});
  }

}
