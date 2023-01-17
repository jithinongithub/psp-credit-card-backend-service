import {addCCDetails, getAllCCDetails} from '@repository/cc-in-memory';
import {isLuhnValid} from '@util/luhn10';
import  {creditCardDetails} from '@localtypes/creditcardTypes';
import { NotFoundException, ValidationException } from './common/exceptions/creditCardServiceExceptions';
export async function addCreditCardDetails(creditCardDetails:creditCardDetails){
    const  isluncheck = await isLuhnValid(creditCardDetails.cc_number);
    console.log(`lun check ${isluncheck}`)
   if (isluncheck){
    return addCCDetails(creditCardDetails);
   }
   else {
    throw new ValidationException('Lunh check failed');
   }
   
}

export async function getCreditCardDetails(){
    const details = await getAllCCDetails();
    if (JSON.stringify(details) === '[{}]'){
        throw new NotFoundException('No credit card details found');
    }
    return details;
 }


 