import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {

  currentPage: string = "current bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
  previousPage: string = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
  
  constructor() {
 
  }

  ngOnInit(): void {
  }

  selectedTab(event: any): void {
    let oldTab = document.querySelector(".current");
    oldTab?.setAttribute("class", this.previousPage);
    oldTab?.removeAttribute("aria-current");
    if(!event.target.ariaCurrent){
      event.target.classList = this.currentPage;
      event.target.setAttribute("aria-current", "page");
    }
  }

}
