import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  shortUrl : ""

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params =>{
      this.shortUrl = params.shortUrl;
      console.log(this.shortUrl);
    });
  } 

  ngOnInit() {
  }

}
