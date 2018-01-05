import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'selector-child',
    templateUrl: './child.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ComChild { 
    @Input()
    parentInput1: string;

    @Input()
    parentInput2: string;

    @Input()
    parentInputClick: string;

    @Output()
    sendMsgEvent = new EventEmitter<string>();
    msgFromChild: string;

    sendMsg() {
        console.log(this.msgFromChild);
        this.sendMsgEvent.emit(this.msgFromChild);
    }
}