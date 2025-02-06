// stores/counter.js

import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter",{
    state:()=>({count:0}),
    actions:{
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        },
        multiplyWith(x:any){
            this.count*x;
        }
    },
    //getters - read and transform value within pinia context
    getters:{
        double: (state) => state.count*2
    }
})
