import React, { useState, useEffect } from 'react'; // Import necessary hooks from React
import { View, TextInput, Button, Text, FlatList } from 'react-native'; // Import UI components from React Native
import { saveItem, fetchItems } from './storage'; // Import the storage utility functions

// Define the main component
const App = () => {
  // State variables to manage the title and description input values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  // State variable to store the list of items fetched from local storage
  const [items, setItems] = useState([]);

  /**
   * Function to handle saving an item
   * Uses the saveItem utility function to save data to local storage
   */
  const handleSaveItem = async () => {
    try {
      // Call saveItem from storage.js to save the item and get the updated list
      const updatedItems = await saveItem(title, description);
      
      // Update the state with the newly updated items list
      setItems(updatedItems);
      
      // Clear the input fields after saving
      setTitle('');
      setDescription('');
    } catch (error) {
      // Log the error if saving fails
      console.error('Error saving item:', error);
    }
  };

  /**
   * useEffect hook to fetch items from local storage when the component mounts
   */
  useEffect(() => {
    const loadItems = async () => {
      try {
        // Call fetchItems from storage.js to get the list of stored items
        const storedItems = await fetchItems();
        
        // Update the state with the fetched items
        setItems(storedItems);
      } catch (error) {
        // Log the error if fetching fails
        console.error('Error fetching items:', error);
      }
    };

    // Call the function to load items
    loadItems();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <View style={{ padding: 20 }}>
      {/* UI elements omitted for clarity */}
    </View>
  );
};

// Export the component as default
export default App;


{/*
    

    


    
    
*/}