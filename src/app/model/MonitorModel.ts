import { HitsModel } from '../model/HitsModel';
import {AggregationsModel} from '../model/AggregationsModel';

export class MonitorModel
{
    public hits : HitsModel; 
    public aggregations : AggregationsModel;

    constructor(hits : HitsModel, aggregations : AggregationsModel) 
    {
        this.hits = hits;
        this.aggregations = aggregations;
    }

    public get Aggregations()
    {
        return this.aggregations;
    }

}