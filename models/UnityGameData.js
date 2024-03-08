var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UnityGameData = new Schema({
    screenName:{
        type:string,
        required:true
    },
    firstName:{
        type:string,
        required:true
    },
    lastName:{
        type:string,
        required:true
    },
    date:{
        type:Number,
        required:true
    },
    score:{
        type:Number,
        required:true
    }
});

mongoose.model('unitygames', UnityGameData);