import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

import {MonitorService} from '../service/monitor.service';
import {MonitorModel} from '../model/MonitorModel';
import {HitsModel} from '../model/HitsModel';
import {AggregationsModel} from '../model/AggregationsModel';
import {WordsModel} from '../model/WordsModel' ;
import {BucketsModel} from '../model/BucketsModel' ;

import {MasterDataModel} from '../model/MasterDataModel' ;

@Component({
  selector: 'app-monitor',
  providers: [MonitorService],
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit 
{
    private _monitorModel = null;
    private _hitsModel = null;
    private _aggregationsmodel = null;
    private _wordsmodel = null;
    private _bucketsmodel = null;

    //passing real time data
    private param : string

    masterData = [
     new MasterDataModel('5 Mins', '{"minutes":"5"}'),
     new MasterDataModel('15 Mins', '{"minutes":"15"}'),
     new MasterDataModel('1 Hours', '{"hours":"1"}'),
     new MasterDataModel('5 Hours', '{"hours":"5"}'),
     new MasterDataModel('1 Days', '{"days":"1"}'),
     new MasterDataModel('10 Days', '{"days":"10"}')
  ];

  constructor(private _monitorService: MonitorService) 
  { 
      this._hitsModel = new HitsModel();
      this._bucketsmodel = Array<BucketsModel>();
      
      this._wordsmodel = new WordsModel(this._bucketsmodel);
      this._aggregationsmodel = new AggregationsModel(this._wordsmodel);

      this._monitorModel = new MonitorModel(this._hitsModel, this._aggregationsmodel);
      console.log(this._monitorModel);

      this.param = '{"days":"10"}';
}

  ngOnInit() 
  {
    this._monitorService.Params = this.param;
    this._monitorService.getmonitoringData().subscribe
    (
      data => this._monitorModel = data,
      //error => this.handleError(error)
    ); 
  }

  ngDoCheck()
  {
    console.log(this._monitorModel);
  }
 
  changeInSelect()
  {
    //alert(this.param);
    this._monitorService.Params = this.param;
    this._monitorService.getmonitoringData().subscribe(data => this._monitorModel = data);
  }
  


  private handleError(error: Response) 
  {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
  }


}
