

/*
    Function: validateInput
    Input: Accepts string values
    Output: Checks the input and throw error for invalid inputs - does basic validation
*/
const validateInput=(inputString: string) => {
    try {
        if(inputString.startsWith('\n') || inputString.endsWith('\n')) {
            throw 'input cant have new line at start or ending of the string';
        }
        if(inputString.startsWith('//') && !inputString.includes('\n')) {
            throw 'input format is not suitable for delimiter';
        }
    } catch(error) {
        throw error;
    }
}
/*
    Function: add
    Input: Accepts string values
    Output: Returns Sum of all the comma/delimiters separated positive numbers present in the string
*/
export const add = (inputString: string) => {
    try {
        validateInput(inputString);
            
        let numbers: string[] = [];

        if(inputString.startsWith('//')) {
            // Split input string by delimitter
            numbers = inputString.split('\n')[1].split(inputString.charAt(2));
            console.log(numbers)
        } else if(inputString.includes('\n')) {
            // Split input by \n
            numbers = inputString.split('\n');
        } else {
            numbers = inputString.split(',');
        }

        let negativeNumbers:any = [];
        const total = numbers.reduce((total, current) => {
            const currentValue = Number(current);
            if(isNaN(currentValue)) {
                throw 'Invalid Input: input is not a valid number';
            }
            if(Number(current) < 0) {
                negativeNumbers.push(currentValue)
            }
            return total+currentValue;
        }, 0);

        if(negativeNumbers.length) {
            throw `Input has invalid values, negative values: ${negativeNumbers.join(',')}`;
        }

        return total;
    } catch (error) {
        return error;
    }
}

//valid case 
// export default add;
// console.log(add('1,2'));
// console.log(add('1\n2\n3'));
// console.log(add('//;\n1;2;3'));
// console.log(add('//:\n1:2:3'));

// // Invalid scenarios
// console.log(add('\n1\n2'));
// console.log(add('1\n2\n'));
// console.log(add('//:1,2'));
// console.log(add('1,-2,3'));
// console.log(add('1\n-2\n3\n-3\n-5'));
// console.log(add('//;\n1;-2;3'));
// console.log(add('//;\n1-2;3'));
