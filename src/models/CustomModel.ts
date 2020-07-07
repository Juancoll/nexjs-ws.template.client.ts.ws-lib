import { Model } from './Model';
import { ModelComponent } from './ModelComponent';

export class CustomModel extends Model {
    public name: string;
    public aaa: string;

    constructor(init?: Partial<CustomModel>) { super(init); }


    //#region [ Included Methods ]
        functionA<T>(a: T) {
        return true;
    }
        functionB<T>(): T {
        return undefined;
    }
    //#rendregion
}
