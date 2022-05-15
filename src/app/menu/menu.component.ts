import { Component, OnInit } from '@angular/core';
import { MenuApiCallerService } from '../ApiCallerService/menu.api-caller.service';
import { IAnime } from '../objects/anime.model';
import { RecentAnimeMenu } from '../objects/recentAnimeMenu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public recommandationAnimes: IAnime[] = [];
  public recentAnimes: RecentAnimeMenu[] = [];
  public page: number = 1; //current page
  public totalAnimes : any;
  public animesPerPage = 16;

  constructor(private api : MenuApiCallerService) 
  {
    
  }

  ngOnInit(): void {
    this.getRecommandationAnime();
    this.getRecentAnimes();
  }

  getRecommandationAnime()
  {
    this.api.getRecommandationAnimes().subscribe(data =>{
      for(let i = 0; i < 3; i++)
      {
        this.recommandationAnimes.push(data.data[i].entry[0]);
        this.recommandationAnimes.push(data.data[i].entry[1]);
      }
    })
  }

  getRecentAnimes(){
    this.api.getRecentAnimes().subscribe(data =>{
      this.recentAnimes = data.data;
      this.totalAnimes = data.data.length;
      this.page = 0;
    })
  }

}
