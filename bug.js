```javascript
//Incorrect usage of $inc operator in MongoDB
db.collection('myCollection').updateOne({"_id":ObjectId("someObjectId")},{$inc:{counter: '1'}})
```