import { Component } from '@angular/core';

import { graphviz }  from 'd3-graphviz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd3-graphviz in Angular';

  ngOnInit() {
    graphviz('div').renderDot('digraph {a -> b}');
  }
}
