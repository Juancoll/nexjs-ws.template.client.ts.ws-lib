import { WSServiceBase, HubNotification, HubNotificationCredentials, HubNotificationCredentialsData, HubNotificationData } from '@nexjs/wsclient';


export class JobsWSService extends WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'jobs';
    //#endregion

    //#region [ hub ]
    //#endregion

    //#region [ rest ]

     // isAuth: false
    public runJob(): Promise<void> {
        return this.request<void>( 'runJob', null, null );
    }

     // isAuth: false
    public start(): Promise<void> {
        return this.request<void>( 'start', null, null );
    }

     // isAuth: false
    public stop(): Promise<void> {
        return this.request<void>( 'stop', null, null );
    }
    //#endregion
}
