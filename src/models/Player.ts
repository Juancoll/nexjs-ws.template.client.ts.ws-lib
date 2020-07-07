import { Model } from './Model';
import { ModelComponent } from './ModelComponent';
import { ModelRef } from './ModelRef';

export class Player extends Model {
    public name: string;
    public label: string;
    public serial: string;
    public owner: ModelRef;

    constructor(init?: Partial<Player>) { super(init); }


}
