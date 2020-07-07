
export class ModelComponent {
    public _type: string;
    public data: any;

    constructor() {
        this._type = this.constructor.name;
    }


}
