// @ts-ignore
import  {InMemoryDatabase} from 'in-memory-database';
import  {creditCardDetails} from '@localtypes/creditcardTypes';
const db = new InMemoryDatabase();
export async function addCCDetails (creditCardDetails:creditCardDetails){
    console.log(`adding ${creditCardDetails.cc_number} `);
    db.set(creditCardDetails.cc_number,{creditCardDetails});
    const isAlreadyThere = db.has(creditCardDetails.cc_number);
    console.log(isAlreadyThere);
}

export async function getAllCCDetails() {
    console.log(`retrieving cc details ${db.keys()} ${JSON.stringify(db.mget(db.keys()))}`);
    return [db.mget(db.keys())];
}




