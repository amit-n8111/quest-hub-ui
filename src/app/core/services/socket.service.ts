import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { Message } from './../model/message.model';
// import { Event } from '../model/event';

import * as socketIo from 'socket.io-client';
import { environment } from '../../../environments/environment.prod';

const SERVER_URL = environment.SOCKET_URL;

@Injectable()
export class SocketService {
    private socket;

    constructor() {
        // this.socket = socketIo(SERVER_URL);
    }

    // public initSocket(): void {
    //     this.socket = socketIo(SERVER_URL);
    // }

    public sendMessage(message: Message): void {
        this.socket.emit('message', message);
    }

    public onMessage(): Observable<Message> {
        return new Observable<Message>(observer => {
            this.socket.on('message', (data: Message) => observer.next(data));
        });
    }

    public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}
