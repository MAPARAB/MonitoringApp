export class HitsModel
{
    public total : number;

    constructor()
    {
        this.total = 100;
    }

    public get Total()
    {
        return this.total;
    }

    public set Total(value : number)
    {
        this.total = value;
    }

}