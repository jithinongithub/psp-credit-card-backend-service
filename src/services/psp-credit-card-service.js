const db_service = require('../repository/cc-in-memory');
async function addCreditCardDetails(creditCardDetails){
   db_service.addCCDetails(creditCardDetails);
}

async function getCreditCardDetails(){
    return db_service.getAllCCDetails();
 }
module.exports = {
    addCreditCardDetails,
    getCreditCardDetails
}