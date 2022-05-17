import { Component, Injectable, Input, OnInit } from '@angular/core';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  @Input() totalEpisodes: number;
  labelsEpisodes: LabelEpisode[] = [];
  Episodes: number[] =[];
  maximum = 100;

  constructor() { 
  }

  ngOnInit(): void {
    this.calculateLabels();
  }

  //ne faire que si +100 episodes
  calculateLabels()
  {
    var episodeSplit = Math.floor(this.totalEpisodes/100);
    var min = 1;
    var max = 100;

    for(let i=0; i < episodeSplit ; i++)
    {
      this.labelsEpisodes.push(new LabelEpisode(min,max,min+"-"+max,this.fillEpisodes(min,max)));
      min +=100;
      max+= 100;
    }

    var episodeLastPage = this.totalEpisodes - (episodeSplit*100);

    max = min+episodeLastPage-1;
      this.labelsEpisodes.push(new LabelEpisode(min,max,min+"-"+max,this.fillEpisodes(min,max)))
  }


  fillEpisodes(min:number, max:number)
  {
    var episodeNumbers: number[] =[];
    for(let j= min; j < max+1 ; j++)
    {
      episodeNumbers.push(j);
    }

    return episodeNumbers;
  }

}


export class LabelEpisode
{

  constructor(  
    public min:number,
    public max:number,
    public label:string,
    public episodes:number[]){}
}
