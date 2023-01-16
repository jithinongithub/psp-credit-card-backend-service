const db_service = require('../repository/cc-in-memory');
const lunh_check = require('../util/luhn10')
async function addCreditCardDetails(creditCardDetails){
    const  isluncheck = await lunh_check.lunh10Check(parseInt(creditCardDetails.cc_number));
    console.log(`lun check ${isluncheck}`)
   if (isluncheck){
    return db_service.addCCDetails(creditCardDetails);
   }
   else {
    console.error('Lunh failed')
    throw new TypeError('Lunh check failed');
   }
   
}

async function getCreditCardDetails(){
    return db_service.getAllCCDetails();
 }
module.exports = {
    addCreditCardDetails,
    getCreditCardDetails
}