import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { newItem } from './../newItem';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news: any = [];
  constructor(private hC: HttpClient) {
    this.hC.get('assets/data.json').subscribe((data) => {
      console.log(data);
      this.news = data;
    });
  }

  ngOnInit(): void {}
}
