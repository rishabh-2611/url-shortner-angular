import { Component, OnInit, Injector} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  router: Router;
  shortUrl: "";

  constructor(private injector: Injector){
    this.router = this.injector.get(Router);
  }

  ngOnInit() {
  }

  onSubmit(){
    // this.router.navigate[this.shortUrl+"/stats"]
    // console.log(this.shortUrl);
  }
}
