// Import AsyncStorage from the async-storage library to use for persistent storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import uuidv4 function from the uuid library to generate unique IDs for each item
import { v4 as uuidv4 } from 'uuid';

/**
 * Function to save a new item to local storage
 * @param {string} title - The title of the item to save
 * @param {string} description - The description of the item to save
 * @returns {Promise<Array>} - Returns the updated list of items
 */
export const saveItem = async (title, description) => {
  try {
    // Generate a unique ID for the new item
    const id = uuidv4();
    
    // Create a new item object with the generated ID, title, and description
    const newItem = { id, title, description };

    // Fetch existing items from local storage
    const storedItems = await AsyncStorage.getItem('items');
    
    // Parse the existing items or initialize with an empty array if none are found
    const parsedItems = storedItems ? JSON.parse(storedItems) : [];
    
    // Add the new item to the existing list of items
    parsedItems.push(newItem);

    // Save the updated list of items back to local storage
    await AsyncStorage.setItem('items', JSON.stringify(parsedItems));
    
    // Return the updated list of items
    return parsedItems;
  } catch (error) {
    // Log and rethrow the error if an error occurs during the process
    console.error('Error saving item:', error);
    throw error;
  }
};

/**
 * Function to fetch all items from local storage
 * @returns {Promise<Array>} - Returns a promise that resolves to an array of items
 */
export const fetchItems = async () => {
  try {
    // Fetch all items from local storage
    const storedItems = await AsyncStorage.getItem('items');
    
    // Parse and return the items or return an empty array if none are found
    return storedItems ? JSON.parse(storedItems) : [];
  } catch (error) {
    // Log and rethrow the error if an error occurs during the process
    console.error('Error fetching items:', error);
    throw error;
  }
};

{/*
    

    


    
    
*/}
