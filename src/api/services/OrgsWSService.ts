import { WSServiceBase, HubNotification, HubNotificationCredentials, HubNotificationCredentialsData, HubNotificationData } from '@nexjs/wsclient';

import { OrgType } from '../../models/OrgType';

export class OrgsWSService extends WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'orgs';
    //#endregion

    //#region [ hub ]
    //#endregion

    //#region [ rest ]

     // isAuth: false
    public funcA(options: OrgType): Promise<OrgType> {
        return this.request<OrgType>( 'funcA', options, null );
    }

     // isAuth: true
    public funcB(name: string): Promise<string> {
        return this.request<string>( 'funcB', { name }, null );
    }
    //#endregion
}
