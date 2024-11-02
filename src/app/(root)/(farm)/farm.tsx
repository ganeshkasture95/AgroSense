import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function FarmPage() {
  const [crops, setCrops] = useState([]); // Stores all crops
  const [cropInput, setCropInput] = useState(''); // Stores current input for crop

  const handleAddCrop = () => {
    if (cropInput.trim() !== '') { // Check if crop input is not empty
      setCrops([...crops, cropInput]);
      setCropInput(''); // Clear the input field after adding
      console.log(crops);
    } else {
      console.warn("Please enter a crop name"); // Optional: Warn user if no input
    }
  };

  return (


    <ScrollView className="flex-1 p-4 bg-[#F0F8F5]">
      <Text className="text-3xl font-bold text-green-800 mb-6">Farm Details</Text>

      {/* Location Section */}
      <View className="mb-6 bg-white p-4 rounded-xl shadow-lg">
        <Text className="text-xl font-semibold text-green-800 mb-2">Farm Location</Text>
        <TextInput
          placeholder="Enter farm location"
          className="bg-gray-100 rounded-lg p-3 text-lg mb-3 border border-gray-300"
        />
        <TouchableOpacity className="flex-row items-center justify-center bg-[#4BA26A] p-3 rounded-lg">
          <Ionicons name="location" size={24} color="white" />
          <Text className="text-white text-lg font-semibold ml-2">Save Location</Text>
        </TouchableOpacity>
      </View>

      {/* Crop Section */}
      <View className="mb-6 bg-white p-4 rounded-xl shadow-lg">
        <Text className="text-xl font-semibold text-green-800 mb-2">Current Crop</Text>
        <TextInput
          placeholder="Enter crop name"
          value={cropInput}
          onChangeText={setCropInput}
          className="bg-gray-100 rounded-lg p-3 text-lg mb-3 border border-gray-300"
        />
        <TouchableOpacity onPress={handleAddCrop} className="flex-row items-center justify-center bg-[#4BA26A] p-3 rounded-lg">
          <Ionicons name="leaf" size={24} color="white" />
          <Text className="text-white text-lg font-semibold ml-2">Add Crop</Text>
        </TouchableOpacity>
      </View>

      {/* Farm Summary Section */}
      <View className="bg-white p-4 rounded-xl shadow-lg mb-4">
        <Text className="text-xl font-semibold text-green-800 mb-2">Farm Overview</Text>
        <View className="flex-row justify-between items-center mt-2 bg-[#BEE3CB] p-3 rounded-lg">
          <View className="flex-col">
            <Text className="text-lg font-semibold text-gray-700">Farm Location: Satara</Text>
            <Text className="text-lg text-gray-600">Crop: Wheat</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </View>
      </View>

      {/* Dynamic Crop List Section */}
      <View className="bg-white p-4 rounded-xl shadow-lg mb-4">
        <Text className="text-xl font-semibold text-green-800 mb-2">Crops Added</Text>
        {
          crops.length === 0 ? (
            <Text className="text-lg text-gray-700">No crops added yet</Text>
          ) : (
            crops.map((crop, index) => (
              <View key={index} className="flex-row justify-between items-center mt-2 bg-[#BEE3CB] p-3 rounded-lg">
                <Text className="text-lg font-semibold text-gray-700">Crop: {crop}</Text>
                <Ionicons name="chevron-forward" size={24} color="gray" />
              </View>
            ))
          )
        }
      </View>
    </ScrollView>
   
  );
}
