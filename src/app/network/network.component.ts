import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  table: any;

  constructor() { }

  ngOnInit(): void {
    this.table = [
      {
        networkid: '1234',
        networkname: 'local',
        ConnectedDevices: 'mobile'
      },
      {
        networkid: '1234',
        networkname: 'local',
        ConnectedDevices: 'mobile'
      },
      {
        networkid: '1234',
        networkname: 'local',
        ConnectedDevices: 'mobile'
      },
      {
        networkid: '1234',
        networkname: 'local',
        ConnectedDevices: 'mobile'
      },
      {
        networkid: '1234',
        networkname: 'local',
        ConnectedDevices: 'mobile'
      },
    ];
  }

}
