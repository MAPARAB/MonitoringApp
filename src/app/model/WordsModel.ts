import {BucketsModel} from '../model/BucketsModel' ;

export class WordsModel
{
    public doc_count_error_upper_bound : number;
    public sum_other_doc_count : number;
    public buckets : BucketsModel;

    constructor(buckets : BucketsModel )
    {
        this.doc_count_error_upper_bound = 100;
        this.sum_other_doc_count = 100;
        this.buckets = buckets;
    }

    public get Doc_count_error_upper_bound()
    {
        return this.doc_count_error_upper_bound;   
    }

    public set Doc_count_error_upper_bound(value : number)
    {
        this.doc_count_error_upper_bound = value;
    }

    public get Sum_other_doc_count()
    {
        return this.Sum_other_doc_count;
    }

    public set Sum_other_doc_count(value : number)
    {
        this.sum_other_doc_count = value;
    }

    public get Bucket()
    {
        return this.buckets;
    }

    public set Bucket(value : BucketsModel)
    {
        this.buckets = value ;
    }
}