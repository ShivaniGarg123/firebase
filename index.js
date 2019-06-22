var db=firebase.firestore();
db.collection("cafesp").get().then((snapshots)=>{
    console.log("snapshots.docs");
})