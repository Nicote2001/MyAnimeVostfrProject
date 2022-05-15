import { Component, Input, OnInit } from '@angular/core';
import { MenuApiCallerService } from 'src/app/ApiCallerService/menu.api-caller.service';
import { IAnime } from 'src/app/objects/anime.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() recommandationAnimes: IAnime[];

  public topAnimes: IAnime[] = [];

  constructor(private api : MenuApiCallerService) 
  {
    
  }

  ngOnInit(): void {
  }
}
