const request = require('request')
const fs = require('fs')

const url="http://api.weatherstack.com/current?access_key=323bd9af6c2a0426efc2c91203344457&query="
const weather = (inputData,callback)=>{
    request({url:url+inputData,json: true},(error,response)=>{
        const err_message = "Address not found";
        if(error || response.body.success===false){
            callback(err_message)
        }
        else
            callback(undefined,response.body)
    })
}
module.exports=weather
