import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ProfilePage() {


   const router = useRouter();
  const handleLogout = async () => {
    console.log("Logout button pressed"); // Check if this logs

    try {
      await AsyncStorage.removeItem("auth");
      console.log("Token removed from storage");

      // Replace the path with your login route
      router.replace("/(auth)/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };


  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [location, setLocation] = useState("Satara, India");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");

  return (
    <ScrollView className="flex-1 p-4 bg-[#F0F8F5]">
      {/* Profile Header */}
      <View className="items-center mb-6">
        <Image 
          source={require("p/public/assets/images/selection.png")} // Placeholder for profile picture
          className="w-24 h-24 rounded-full mb-4"
        />
        <Text className="text-3xl font-bold text-green-800">{username}</Text>
        <Text className="text-lg text-gray-600">{location}</Text>
      </View>

      {/* Editable Profile Information Section */}
      <View className="bg-white p-4 rounded-xl shadow-lg mb-4">
        <Text className="text-xl font-semibold text-green-800 mb-4">Profile Information</Text>
        
        <TextInput 
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your name"
          className="bg-gray-100 rounded-lg p-3 text-lg mb-3 border border-gray-300"
        />
        <TextInput 
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          className="bg-gray-100 rounded-lg p-3 text-lg mb-3 border border-gray-300"
        />
        <TextInput 
          value={location}
          onChangeText={setLocation}
          placeholder="Enter your location"
          className="bg-gray-100 rounded-lg p-3 text-lg mb-3 border border-gray-300"
        />
        <TextInput 
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          className="bg-gray-100 rounded-lg p-3 text-lg mb-3 border border-gray-300"
        />
        
        <TouchableOpacity className="bg-[#4BA26A] p-3 rounded-lg flex-row justify-center items-center mt-4">
          <Ionicons name="save" size={24} color="white" />
          <Text className="text-white text-lg font-semibold ml-2">Save Changes</Text>
        </TouchableOpacity>
      </View>

      {/* Farming Statistics Summary */}
      <View className="bg-white p-4 rounded-xl shadow-lg mb-4">
        <Text className="text-xl font-semibold text-green-800 mb-4">Farming Overview</Text>
        
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-lg font-semibold text-gray-700">Total Farms:</Text>
          <Text className="text-lg text-gray-600">5</Text>
        </View>
        
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-lg font-semibold text-gray-700">Current Crops:</Text>
          <Text className="text-lg text-gray-600">Wheat, Corn</Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-semibold text-gray-700">Irrigation Alerts:</Text>
          <Text className="text-lg text-gray-600">Active</Text>
        </View>
      </View>

      {/* App Settings */}
      <View className="bg-white p-4 rounded-xl shadow-lg mb-4">
        <Text className="text-xl font-semibold text-green-800 mb-4">App Settings</Text>
        
        <TouchableOpacity className="flex-row justify-between items-center mb-3 p-3 bg-[#BEE3CB] rounded-lg">
          <Text className="text-lg font-semibold text-gray-700">Notification Settings</Text>
          <Ionicons name="notifications" size={24} color="gray" />
        </TouchableOpacity>
        
        <TouchableOpacity className="flex-row justify-between items-center mb-3 p-3 bg-[#BEE3CB] rounded-lg">
          <Text className="text-lg font-semibold text-gray-700">Privacy Settings</Text>
          <Ionicons name="lock-closed" size={24} color="gray" />
        </TouchableOpacity>
        
        <TouchableOpacity className="flex-row justify-between items-center mb-3 p-3 bg-[#BEE3CB] rounded-lg">
          <Text className="text-lg font-semibold text-gray-700">Help & Support</Text>
          <Ionicons name="help-circle" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout} className="flex-row justify-between  items-center p-3 mb-40 bg-[#BEE3CB] rounded-lg">
          <Text className="text-lg font-semibold text-gray-700">LogOut</Text>
          <Ionicons name="help-circle" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
