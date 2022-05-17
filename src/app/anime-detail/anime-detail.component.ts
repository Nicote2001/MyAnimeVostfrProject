import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AnimeDetailsApiCallerService } from '../ApiCallerService/animeDetails.api-caller.service';
import { AnimeDetail } from '../objects/animeDetail.model';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss']
})
export class AnimeDetailComponent implements OnInit {

  animeId: string;
  episode: number;
  safeSrc: SafeResourceUrl;
  animeUrl: string;
  animeInfo: AnimeDetail;

  constructor(private route:ActivatedRoute, public sanitizer: DomSanitizer, public api: AnimeDetailsApiCallerService) 
  { 
    route.params.subscribe(val => {
      this.animeId = this.route.snapshot.params['id'];
      this.episode = this.route.snapshot.params['episode'];
      this.getWatch();
      this.getAnimeInfo();
    });
  }

  ngOnInit(): void 
  {
  }

  getWatch()
  {
    this.api.getAnimeWAtch(this.animeId,this.episode).subscribe(data =>{
      this.animeUrl = data.link
      console.log(data);
      this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.animeUrl);
    })

  }

  getAnimeInfo()
  {
    this.api.getAnimeById(this.animeId).subscribe(data =>{
      this.animeInfo = data.results[0];
    })
  }

}
