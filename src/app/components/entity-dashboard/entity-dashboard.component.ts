import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'entity-dashboard',
  templateUrl: './entity-dashboard.component.html',
  styleUrls: ['./entity-dashboard.component.css']
})
export class EntityDashboardComponent implements OnInit {
  private sub: any;
  private entity: string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.entity = params['entity'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
