import { Injectable } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Injectable()
export class BlockHandler {
    @BlockUI() blockUI: NgBlockUI;
    private count = 0;
    
    start() {
        this.blockUI.start();
        this.count++;
    }

    stop(force = false) {
        // if(force) this.blockUI.blockCount = 1;
        this.blockUI.stop();
        this.count--;
        // if(force) this.count = 0;
        // if(this.count <= 0){
        //     this.blockUI.stop();
        //     this.count = 0;
        // }        
    }
}