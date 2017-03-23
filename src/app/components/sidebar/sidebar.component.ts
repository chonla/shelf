import { Component, OnInit } from '@angular/core';
import { HatchMetaConfig } from '../../config/hatchmeta.config'
import { FieldToLabelPipe } from '../../pipes/fieldToLabel/fieldToLabel.pipe'

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

/**
 * Create sidebar from sources. Menu contains multiple groups.
 * Each group contains a list of menu item.
 * Menu item has title, link, sub, external flag, win.
 * Sidebar can contain 2 levels of menu.
 * 
 * title : (String) Title of menu item.
 * link : (String/RouterLink) A link to external website or a routerLink object (See https://angular.io/docs/ts/latest/api/router/index/RouterLink-directive.html).
 * sub : (Array of items) A list of subitem.
 * external : (Boolean) A flag telling if link is external link.
 * win : (String) Window target name, default is "_self".
 * 
 * @example
 * [
 *   [
 *     {
 *       title: "Item 1",
 *       link: ["/user", id, "name", name]
 *     },
 *     {
 *       title: "Has sub item"
 *       sub: [
 *         {
 *            title: "Sub item 1",
 *            link: ["/animal", pet]
 *         }
 *       ]
 *     }
 *   ],
 *   [
 *     {
 *       title: "External",
 *       link: "http://www.google.com",
 *       external: true,
 *       win: "_blank"
 *     }
 *   ]
 * ]
 * 
 */
export class SidebarComponent implements OnInit {

  private menu = [];
  private labelizer: FieldToLabelPipe;
  private config: HatchMetaConfig;

  constructor(private conf: HatchMetaConfig, private lbl: FieldToLabelPipe) {
    this.labelizer = lbl;
    this.config = conf;
    
    let group = this.metaMenu();
    this.menu.push(group);

    this.menu.push([
      {
        title: "Google",
        link: "http://www.google.com",
        external: true,
        win: "_blank"
      }
    ]);
  }

  metaMenu() {
    let meta = this.config.keys();
    let group = [{
      title: "Entities",
      sub: []
    }];

    for (let i = 0; i < meta.length; i++) {
      group[0].sub.push({
        title: this.labelizer.transform(meta[i]),
        link: ["/entity", meta[i]]
      });
    }

    return group;
  }

  ngOnInit() {
  }

}
