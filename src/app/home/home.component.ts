import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  // h1Style: Boolean = false;
  // h2Style: Boolean = false;
  // h3Style: Boolean = false;
  // h4Style: Boolean = false;

  users: Object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  // firstClick() {
  //   this.h1Style = !this.h1Style;
  // }

  // secondClick() {
  //   this.h2Style = !this.h2Style;
  // }

  // thirdClick() {
  //   this.h3Style = !this.h3Style;
  // }

  // fourthClick() {
  //   this.h4Style = !this.h4Style;
  // }
}
