
async function checkLuhn(strToTest: string, multiple: number = 10): Promise<number>
{
    let digit: number = 0;
    let sum: number = 0;
    let length: number = strToTest.length;
    let odd: boolean = false;
    console.log(`inside the luncheck and input string is ${strToTest}`);
    for (let i: number = (length - 1); i >= 0; i--)
    {
        digit = parseInt(strToTest[i], 10) | 0;

        if (odd === true)
        {
            digit = digit * 2 | 0; 
        }
        if (digit > 9)
        {
            digit = digit - 9;
        }
        odd = !odd;
        sum += digit;
    }
    let res: number = sum % multiple;
    if (res === 0)
    {
        return 0;
    }
    return multiple - (res);
}
export async function isLuhnValid(strToTest: string, multiple: number = 10):Promise<boolean>
{
    if (strToTest.length === 0)
    {
        return false;
    }

    let ret:boolean = (await checkLuhn(strToTest, multiple) === 0);
    return ret;
}