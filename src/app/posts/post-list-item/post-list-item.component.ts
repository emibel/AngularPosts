import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../post.interface';

@Component({
  selector: 'prd-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit {

  @Input() post: IPost;
  @Input() classItem: string;

  constructor() { }

  ngOnInit() {
  }

}
