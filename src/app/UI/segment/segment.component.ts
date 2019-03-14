import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prd-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss']
})
export class SegmentComponent implements OnInit {

  @Input() className: string;
  constructor() { }

  ngOnInit() {
  }

}
