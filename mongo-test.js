var mongo = require('mongodb')
var monk= require('monk');
var db = monk('127.0.0.1:27107/nodetest1')

var collection=db.get("usercollection");

collection.find({},{},function(e,docs){
    console.log("idlist",{
            "idlist": docs
        }
    )
})


collection.insert({
    "id": "123242421",
    "bot": "alpha"
}, function(err, doc){
    if(err){
        console.log("shit happens"+ err)
    }
    else{
        collection.find({},{}, function(e,docs){
            console.log('idlist', {
                "idlist" : docs
            })
        })
    }


})