import {addCCDetails, getAllCCDetails} from '../repository/cc-in-memory';
import {isLuhnValid} from '../util/luhn10';
import  {creditCardDetails} from '../@types/creditcardTypes';
export async function addCreditCardDetails(creditCardDetails:creditCardDetails){
    const  isluncheck = await isLuhnValid(creditCardDetails.cc_number);
    console.log(`lun check ${isluncheck}`)
   if (isluncheck){
    return addCCDetails(creditCardDetails);
   }
   else {
    console.error('Lunh failed')
    throw new TypeError('Lunh check failed');
   }
   
}

export async function getCreditCardDetails(){
    return getAllCCDetails();
 }


 