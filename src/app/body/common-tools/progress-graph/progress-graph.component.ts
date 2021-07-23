import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-graph',
  templateUrl: './progress-graph.component.html',
  styleUrls: ['./progress-graph.component.css']
})
export class ProgressGraphComponent implements OnInit {
  
  @Input("workdone") workdone:number
  workdonePercentage:number=0
  constructor() { }


  ngOnInit(): void {
    this.workdonePercentage=this.workdone
  }

}
