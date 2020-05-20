import { Component } from '@angular/core';

import { graphviz }  from 'd3-graphviz';
import { wasmFolder } from "@hpcc-js/wasm";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd3-graphviz in Angular';

  ngOnInit() {
    wasmFolder('/assets/@hpcc-js/wasm/dist/');
    graphviz('div').renderDot('digraph {a -> b}');
  }
}
