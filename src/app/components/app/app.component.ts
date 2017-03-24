import { Component } from '@angular/core';
import { HatchMetaConfig } from '../../config/hatchmeta.config'
import { FieldToLabelPipe } from '../../pipes/fieldToLabel/field-to-label.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private entityMenu:Object[];

  constructor(private config: HatchMetaConfig, private labelizer: FieldToLabelPipe) {

    this.entityMenu = this.createEntityMenu();

  }

  createEntityMenu() {
    let meta = this.config.keys();
    let menu = [];

    for (let i = 0; i < meta.length; i++) {
      menu.push({
        title: this.labelizer.transform(meta[i]),
        link: ["/entity", meta[i]]
      });
    }

    return menu;
  }
}
