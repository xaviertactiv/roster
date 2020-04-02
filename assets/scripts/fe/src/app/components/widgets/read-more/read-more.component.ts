import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'read-more',
  templateUrl: './read-more.component.html',
})
export class ReadMoreComponent implements OnInit{
  @Input() text: string;

  @Input() maxChar: number = 300;

  public summary: string;
  public isExpand: boolean = false; 

  ngOnInit() {
    this.setSummary();
  }

  toggle() {
    this.isExpand = !this.isExpand;
    this.setSummary();
  }

  setSummary() {
    this.summary = this.isExpand ? this.text : this.text.substr(0, this.maxChar);
  }

}
