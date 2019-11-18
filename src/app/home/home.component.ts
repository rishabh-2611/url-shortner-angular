import { Component, OnInit, Injector } from "@angular/core";
import { CommonService } from "../common.service";
import { environment } from "../../environments/environment";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  webUrl = environment.webUrl;
  router: Router;

  link = {
    longUrl: "",
    shortUrl: ""
  };
  shortUrl: "";
  isUrlShortened = false;

  constructor(
    private injector: Injector,
    private commonService: CommonService,
    private route: ActivatedRoute
  ) {
    this.router = this.injector.get(Router);
    this.route.params.subscribe(params => {
      this.shortUrl = params.shortUrl;
      if (this.shortUrl) {
        this.commonService.getLongUrl(this.shortUrl).subscribe(res => {
          if (res.isSuccess == true) {
            window.location.replace(res.url.longUrl);
          } else {
            // alert();
          }
        });
      }
    });
  }

  ngOnInit() { }

  onSubmit() {
    this.commonService.shortenUrl(this.link.longUrl).subscribe(res => {
      if (res.isSuccess) {
        this.isUrlShortened = true;
        this.link.shortUrl = this.webUrl + res.shortUrl;
        if (!res.isUnique) {
          alert("This URL was already shortened");
        }
      } else {
      }
    });
  }
}
