```javascript
//Correct usage of $inc operator in MongoDB
db.collection('myCollection').updateOne({"_id":ObjectId("someObjectId")},{$inc:{counter: 1}})
//Alternatively, check and convert before incrementing
db.collection('myCollection').findOneAndUpdate({"_id":ObjectId("someObjectId")},{
$inc: {counter:1}
},{
projection: {counter:1},
returnOriginal: false
}).then(result => {
  if(typeof result.value.counter === 'string'){
    result.value.counter = parseInt(result.value.counter);
    db.collection('myCollection').updateOne({"_id":ObjectId("someObjectId")},{$set:{counter: result.value.counter +1}});
  }
})
```