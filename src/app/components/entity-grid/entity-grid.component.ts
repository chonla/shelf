import { Component, OnChanges, Input } from '@angular/core';
import { EntityLoaderService } from '../../services/entity-loader.service';

@Component({
  selector: 'entity-grid',
  templateUrl: './entity-grid.component.html',
  styleUrls: ['./entity-grid.component.css']
})
export class EntityGridComponent implements OnChanges {
  private data:Object[];
  private fields:string[];
  @Input() entity:string;

  constructor(private entityService:EntityLoaderService) {
   }

  ngOnChanges() {
    this.fields = this.entityService.getFields(this.entity);
    this.entityService.get(this.entity)
            .subscribe(res => {
                this.data = res.results;
            });
  }

}
