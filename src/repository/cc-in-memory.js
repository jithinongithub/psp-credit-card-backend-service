const { InMemoryDatabase }= require('in-memory-database');
const db = new InMemoryDatabase();
async function addCCDetails (creditCardDetails){
    console.log(`adding ${creditCardDetails.cc_number} `);
    db.set(creditCardDetails.cc_number,{creditCardDetails});
    const isAlreadyThere = db.has(creditCardDetails.cc_number);
    console.log(isAlreadyThere);
}

async function getAllCCDetails() {
    console.log(`retrieving cc details ${db.keys()} ${JSON.stringify(db.mget(['11212','11213']))}`);
    return db.mget(db.keys());
}

module.exports = {
    addCCDetails ,
    getAllCCDetails
}

