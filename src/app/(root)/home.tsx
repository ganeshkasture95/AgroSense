import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const HomeCardData = [
  {
    name: "Dignose your crop",
    image: require("p/public/assets/images/farm.png"),
    color: "#BEE3CB",
    action: "Crop Diagnose",
    path:"/(root)/(farm)/CropDiagnose"
  },
  {
    name: "Soil Monitoring",
    image: require("p/public/assets/images/farm.png"),
    color: "#BEE3CB",
    action: "Check Soil Health",
    path:"/(root)/(farm)/SoilMonitoring"
  },
  {
    name: "Weather Updates",
    image: require("p/public/assets/images/farm.png"),
    color: "#BEE3CB",
    action: "Live Forecast",
    path:"/(root)/(farm)/Farm"
  },
  {
    name: "Water Management",
    image: require("p/public/assets/images/pump.png"),
    color: "#BEE3CB",
    action: "Irrigation Control",
    path:"/(root)/(farm)/Irrigation"
  },
]


const Home = () => {

  return (
    <SafeAreaView className='p-2 '>
      <ScrollView className=' flex gap-2' showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#BEE3CB', '#9DD0AF', '#4BA26A']}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          className="rounded-3xl shadow-lg"
          style={{ height: 250, borderRadius: 24, overflow: 'hidden' }}
        >
          {/* Overlay for better text contrast */}
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.1)',
              borderRadius: 24,
            }}
          />

          <View className="flex-row justify-between items-center px-6 pt-6">
            {/* Temperature */}
            <Text className="text-[70px] font-JakartaBold text-white shadow-lg">29°C</Text>
            <Image source={require("p/public/assets/images/clouds.png")} className="w-32 h-32 opacity-90" />
          </View>

          <View className="flex-row justify-between items-center px-6 pb-4">
            {/* Location and temperature range */}
            <View>
              <Text className="text-xl font-JakartaSemiBold text-gray-200">H: 32°  L: 27°</Text>
              <Text className="text-[28px] font-JakartaBold text-white tracking-tight">Satara, Dolegaon</Text>
            </View>

            {/* Weather description */}
            <Text className="text-2xl font-bold text-white">Cloudy</Text>
          </View>
        </LinearGradient>

        {/* Add Crop */}
        <TouchableOpacity onPress={() => router.push("/(root)/farm")} className="flex-row p-4 items-center bg-[#BEE3CB] mt-3 rounded-3xl shadow-lg justify-between">
          <View className="flex-row gap-4 items-center space-x-3">
            <Image
              source={require("p/public/assets/images/Group.png")}
              className="w-14 h-14 bg-white rounded-full p-2"
              style={{ borderWidth: 2, borderColor: "#81C784" }}
            />
            <View className=''>
              <Text className="text-2xl font-bold text-[#2E7D32]">Add Crops</Text>
              <Text className="text-sm text-gray-600">Quickly add crop details</Text>
            </View>
          </View>
          <View className="bg-[#4BA26A] rounded-full p-2">
            <FontAwesome6 name="arrow-right" size={20} color="white" />
          </View>
        </TouchableOpacity>


        {/* Main Features */}
        <View className="p-4 bg-[#F0F8F5] flex-1">
          <Text className="text-3xl font-bold text-green-800 mb-6">
            Main Features
          </Text>

          {/* Two-Column Layout */}
          <View className="flex-row pb-32 flex-wrap justify-between">

            {/* Feature 1 */}
            {HomeCardData.map((item, index) => (
              <View key={index} className="w-[48%] mb-4 items-center p-4 bg-[#BEE3CB] rounded-xl shadow-md">
                <Image source={item.image} className="w-20 h-20 bg-white rounded-full mb-3" resizeMode="contain" />
                <Text className="font-semibold text-green-800">{item.name}</Text>
                <TouchableOpacity onPress={() => router.push(item.path)} className="flex-row justify-between items-center p-2 mt-3 rounded-lg w-full bg-[#4BA26A]">
                  <Text className="text-lg font-bold text-white ">{item.action}</Text>
                  <Ionicons name="chevron-back" size={20} color="white" />
                </TouchableOpacity >
              </View>
            ))}
          </View>
        </View>
        <View className="p-4">
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home