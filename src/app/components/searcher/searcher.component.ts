import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-searcher",
  templateUrl: "./searcher.component.html",
  styleUrls: ["./searcher.component.scss"]
})
export class SearcherComponent implements OnInit {
  phrase: string;
  location: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.phrase = params.phrase || "";
      this.location = params.location || "";
    });
  }

  search() {
    const phrase = this.phrase;
    const location = this.location;
    this.router.navigate(["/search-results"], {
      queryParams: { phrase, location }
    });
  }
}
