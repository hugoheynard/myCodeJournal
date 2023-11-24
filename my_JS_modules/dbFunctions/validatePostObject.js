import { checkTableTypeStructure } from "./checkTableTypeStructure.js";

const tableObject = await checkTableTypeStructure('blogPost');

const validTypeStructure = async (newPostObject, referenceObject) => {
// check if the two structures have the same key
    try {
        return Object.keys(referenceObject).every((key, index) => {
            return Object.keys(newPostObject)[index] === key;
        });
    } catch (error) {
        console.error("Error checking type structure:", error);
        return false; // or throw an error depending on your use case
    }
};


const validDataTypes = async (newPostObject, referenceObject) => {

    const textOrDate = (input) => {
        // defines TEXT or date by reducing and parsing the string to get a type
        const reducedInput = input.split('-')
        .reduce((accumulator, currentValue) => {
            return parseInt(accumulator + currentValue);
        });
        if (typeof reducedInput === 'string') {
            return 'TEXT'
        }
        return 'DATE'
    }
    
    const typeArray = (object) => {
        //returns an array of converted types JS to SQLite types to compare
        const arr = [];
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                arr.push(object[key]);  
            }
        }
        
        const typeArr = arr.map(element => {
            if (typeof element === 'string') {
                return textOrDate(element)
            } else if (typeof element === 'number' && Number.isInteger(element)) {   
                return 'INT';
            }
        })
        return typeArr
    }
    
    try {
        return Object.values(referenceObject).every((referenceType, index) => {
            return typeArray(newPostObject)[index] === referenceType
        });

    } catch (error) {
        console.error("Error checking Data type:", error);
        return false; // or throw an error depending on your use case
    }
    
}


export const validatePostObject = async (obj) => {
    if (validTypeStructure(obj, tableObject) && validDataTypes(obj, tableObject)) {
        return obj
    }
}