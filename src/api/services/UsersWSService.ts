import { WSServiceBase, HubNotification, HubNotificationCredentials, HubNotificationCredentialsData, HubNotificationData } from '@nexjs/wsclient';

import { User } from '../../models/User';
import { Model } from '../../models/Model';
import { ModelComponent } from '../../models/ModelComponent';

export class UsersWSService extends WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'users';
    //#endregion

    //#region [ hub ]
    //#endregion

    //#region [ rest ]

     // isAuth: false
    public list(): Promise<User[]> {
        return this.request<User[]>( 'list', null, null );
    }

     // isAuth: false
    public findById(): Promise<User> {
        return this.request<User>( 'findById', null, null );
    }

     // isAuth: false
    public findOne(): Promise<User> {
        return this.request<User>( 'findOne', null, null );
    }

     // isAuth: false
    public findMany(): Promise<User[]> {
        return this.request<User[]>( 'findMany', null, null );
    }

     // isAuth: false
    public updateQuery(): Promise<number> {
        return this.request<number>( 'updateQuery', null, null );
    }

     // isAuth: false
    public updateModel(): Promise<User> {
        return this.request<User>( 'updateModel', null, null );
    }
    //#endregion
}
