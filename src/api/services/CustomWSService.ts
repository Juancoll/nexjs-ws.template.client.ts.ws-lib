import { WSServiceBase, HubNotification, HubNotificationCredentials, HubNotificationCredentialsData, HubNotificationData } from '@nexjs/wsclient';

import { User } from '../../models/User';
import { Model } from '../../models/Model';
import { ModelComponent } from '../../models/ModelComponent';

export class CustomWSService extends WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'custom';
    //#endregion

    //#region [ hub ]
    //#endregion

    //#region [ rest ]

     // isAuth: false
    public check(): Promise<void> {
        return this.request<void>( 'check', null, null );
    }

     // isAuth: false
    public removeCollection(): Promise<boolean> {
        return this.request<boolean>( 'removeCollection', null, null );
    }

     // isAuth: false
    public createManyUsers(): Promise<User[]> {
        return this.request<User[]>( 'createManyUsers', null, null );
    }
    //#endregion
}
