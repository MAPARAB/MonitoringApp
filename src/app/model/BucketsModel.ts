export class BucketsModel
{
    public key : string;
    public doc_count : number;

    constructor()
    {
        this.key = "API Vendor";
        this.doc_count = 0;
    }

    public get Key()
    {
        return this.key;
    }

    public set Key(value : string)
    {
        this.key = value;
    }

    public get Doc_Count()
    {
        return this.doc_count;
    }

    public set Doc_Count(value : number)
    {
        this.doc_count = value;
    }
}