import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Paho} from 'ng2-mqtt/mqttws31';

@Component({
  selector: 'log-tab',  // <log-tab></log-tab>
  providers: [],
  encapsulation: ViewEncapsulation.None,
  styleUrls:  ['./message.component.scss'],
  templateUrl: './message.component.html'
})
export class ComMessage implements OnInit {
  private _client: Paho.MQTT.Client;
  private hostname = 'localhost';
  private port = 8021;
  //private connectionname: string = 'Angular2_Client_Paho';
  private connectionname: string = 'greeting';
  private error_message: string = '';
  private i: number = 0;
  private maxline: number = 20;

  public constructor() {
    this._client = new Paho.MQTT.Client(this.hostname, this.port, this.connectionname);
  }

  public ngOnInit() {
    console.log('in Log Component.');

    this._client.onConnectionLost = (responseObject: Object) => {
      console.log('Connection lost:' + JSON.stringify(responseObject));
    };

    this._client.onMessageArrived = (message: Paho.MQTT.Message) => {

      let date = new Date();
      let date_timestamp = date.toLocaleString();
      console.log('Message arrived: ' + date_timestamp + ',  ' + message.payloadString + ',   i:  ' + this.i);

      if (this.i < this.maxline) {
        this.error_message = this.error_message + '&nbsp' + date_timestamp + '&nbsp&nbsp&nbsp&nbsp&nbsp' + message.payloadString + '<br/>';
        this.i = this.i + 1;
      }
      if (this.i >= this.maxline) {
        this.i = 0;
        this.error_message = '';
      }

    };

    this._client.connect({onSuccess: this.onConnected.bind(this), onFailure: this.onFailure.bind(this)});

  }

  private onFailure(): void {
    console.log('client connection failed.');
  }

  private onConnected(): void {
    console.log('Client Connected to message broker:');
    this.subscribe();
    //this.publish();
  }

  private subscribe(): void {
    // subscribe to GEP/34 topics
    //this._client.subscribe('GEP/34/DMD1');
    //this._client.subscribe('GEP/34/DMD2');
    //this._client.subscribe('GEP/34/Radio 1');
    //this._client.subscribe('GEP/34/Radio 2');
    //this._client.subscribe('GEP/34/LoopTech');
    //this._client.subscribe('GEP/34/SysBytes');
    this._client.subscribe('GEP/34/Log/Error', 0);
    //this._client.subscribe('GEP/34/Log/Error');
    //this._client.subscribe('GEP/34/Log/Ok');
  }

  private publish(): void {
    // send message to topic GEP/34/DMD1
    let payload = '{ "Modulation":"RFM", "Normal Operation":-2, "Tx Data Rate":1536000 }';
    let message = new Paho.MQTT.Message(payload);
    message.destinationName = 'GEP/34/DMD1';
    message.retained = false;
    this._client.send(message);
  }

}

