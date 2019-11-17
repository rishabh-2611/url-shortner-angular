import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  link = {
    longUrl: "",
    shortUrl: ""
  }
  isUrlShortened = false;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.commonService
      .shortenUrl(this.link.longUrl)
      .subscribe(res => {
        if (res.isSuccess == true) {
          this.isUrlShortened = true;
          this.link.shortUrl = res.shortUrl
        } else {
          // alert();
        }
      });
  }



}
