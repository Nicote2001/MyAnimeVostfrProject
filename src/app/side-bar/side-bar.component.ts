import { Component, OnInit } from '@angular/core';
import { faCake, faRankingStar, faStar } from '@fortawesome/free-solid-svg-icons';
import { MenuApiCallerService } from '../ApiCallerService/menu.api-caller.service';
import { IAnime } from '../objects/anime.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public topAnimes: IAnime[] = [];
  public topMangas: IAnime[] = [];
  faRankingStar = faRankingStar

  constructor(private api:MenuApiCallerService) { }

  ngOnInit(): void {
    this.getTopAnimes();
    this.getTopManga();
  }


  //functions
  getTopAnimes()
  {
    this.api.getTopAnimes().subscribe(data =>{
      this.topAnimes = data.data.slice(0,5);
    })
  }

  getTopManga()
  {
    this.api.getTopManga().subscribe(data =>{
      this.topMangas = data.data.slice(0,5);
    })
  }

}
