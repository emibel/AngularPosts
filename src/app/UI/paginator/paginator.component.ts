import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'prd-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnDestroy {

  currentPage: number;
  totalItems: number;
  totalCountSubscription: Subscription;

  @Input()
  totalCount: Observable<number>;

  @Output()
  fetchData: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.totalCountSubscription = this.totalCount.subscribe(
      res => { this.totalItems = res; }
    );
    this.currentPage = 0;
    this.fetchData.emit(this.currentPage);
  }

  public getNextPage() {
    this.currentPage = this.currentPage + 1;
    this.fetchData.emit(this.currentPage);
  }

  public getPrevPage() {
    this.currentPage = this.currentPage - 1;
    this.fetchData.emit(this.currentPage);
  }

  ngOnDestroy() {
    this.totalCountSubscription.unsubscribe();
  }
}
