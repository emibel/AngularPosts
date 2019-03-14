import { NgModule } from '@angular/core';
import { PaginatorComponent } from './paginator/paginator.component';
import { SegmentComponent } from './segment/segment.component';
import { NarrowTableComponent } from './narrow-table/narrow-table.component';

@NgModule({
  declarations:  [
    PaginatorComponent,
    SegmentComponent,
    NarrowTableComponent,
  ],
  exports: [
    PaginatorComponent,
    SegmentComponent,
    NarrowTableComponent,
  ]
})

export class UiModule {}
