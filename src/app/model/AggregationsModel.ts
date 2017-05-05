import {WordsModel} from '../model/WordsModel' ;

export class AggregationsModel
{
    public words : WordsModel ;
    
    constructor(words : WordsModel)
    {
        this.words = words;
    }
}