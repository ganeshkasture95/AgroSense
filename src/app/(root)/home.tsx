import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Home = () => {
  // return (
  //   <SafeAreaView className='flex items-center p-2' >
  //     <ScrollView className='w-full' showsVerticalScrollIndicator={false}>

  //       {/* Header Part */}
  //       <View className='flex bg-green-300 h-56 w-full rounded-b-2xl p-2 fixed'>
  //         <View className='flex flex-row w-full p-4 justify-between '>
  //           <View className='flex-1 '>
  //             <Text className='text-2xl font-JakartaBold z-10'>Hello, Ganesh</Text>
  //             <Text className='text-lg font-JakartaSemiBold z-10 '>Welcome to your farm app</Text>
  //           </View>
  //           <View className=''>
  //             <TouchableOpacity>
  //               <Entypo name='menu' size={30} />
  //             </TouchableOpacity>
  //           </View>
  //         </View>

  //         <View className='absolute mt-14 flex flex-row w-full justify-between'>
  //           <Image source={require("../../../public/assets/images/clouds.png")} width={10} height={20} className=' w-40 h-40' />
  //           <Image source={require("../../../public/assets/images/farmer.png")} width={10} height={20} className=' w-40 h-40' />
  //         </View>
  //       </View>

  //       {/* Real Time Data from the farm */}

  //       <View className='flex w-full p-2 h-48 rounded-lg mt-2  bg-slate-300'>
  //         <View className='flex flex-row justify-between p-4'>
  //           <Text className='text-xl font-JakartaBold'>Farm Data</Text>
  //           <TouchableOpacity>
  //             <Text className='text-lg font-JakartaSemiBold '>View All</Text>
  //           </TouchableOpacity>
  //         </View>

  //         <ScrollView horizontal={true} className='flex flex-row  gap-2 '  showsHorizontalScrollIndicator={false} >
  //           {/* <View className='flex flex-col bg-white p-2 rounded-lg'>
  //             <Text className='text-lg font-JakartaSemiBold'>Temperature</Text>
  //             <Text className='text-4xl font-JakartaSemiBold text-green-400'>24°C</Text>
  //           </View>
  //           <View className='flex flex-col'>
  //             <Text className='text-lg font-JakartaSemiBold'>Humidity</Text>
  //             <Text className='text-4xl font-JakartaBold'>60%</Text>
  //           </View>
  //           <View className='flex flex-col'>
  //             <Text className='text-lg font-JakartaSemiBold'>Soil Moisture</Text>
  //             <Text className='text-lg font-JakartaSemiBold text-green-400'>40%</Text>
  //           </View> */}


  //           <RealTimeData name={'Temprature'} data={"23"} icon={require("../../../public/assets/images/wind.png")}/>
  //           <RealTimeData name={'Temprature'} data={"23"} icon={require("../../../public/assets/images/wind.png")}/>
  //           <RealTimeData name={'Temprature'} data={"23"} icon={require("../../../public/assets/images/wind.png")}/>
  //           <RealTimeData name={'Temprature'} data={"23"} icon={require("../../../public/assets/images/wind.png")}/>
  //           <RealTimeData name={'Temprature'} data={"23"} icon={require("../../../public/assets/images/wind.png")}/>
  //           </ScrollView>

  //       </View>




  //       <View className='bg-green-300 mt-3 p-4 rounded-lg '>

  //         <View className='flex flex-row justify-between'>
  //           <Text className='text-xl font-JakartaBold'>Your Farm</Text>
  //           <TouchableOpacity>
  //             <Text className='text-lg font-JakartaSemiBold '>View All</Text>
  //           </TouchableOpacity>
  //         </View>

  //         <ScrollView horizontal={true} className='flex flex-row mt-4' showsHorizontalScrollIndicator={false} >
  //           <View className='flex flex-col bg-white rounded-xl p-4 mr-4'>
  //             <Image source={require("../../../public/assets/images/farm.png")} width={10} height={20} className=' w-40 h-40' />
  //             <Text className='text-lg font-JakartaSemiBold mt-2'>Farm 1</Text>
  //             <Text className='text-lg font-JakartaSemiBold text-green-400'>View</Text>
  //           </View>

  //           <View className='flex flex-col bg-white rounded-xl p-4 mr-4'>
  //             <Image source={require("../../../public/assets/images/farm.png")} width={10} height={20} className=' w-40 h-40' />
  //             <Text className='text-lg font-JakartaSemiBold mt-2'>Farm 2</Text>
  //             <Text className='text-lg font-JakartaSemiBold text-green-400'>View</Text>
  //           </View>

  //           <View className='flex flex-col bg-white rounded-xl p-4 mr-4'>
  //             <Image source={require("../../../public/assets/images/farm.png")} width={10} height={20} className=' w-40 h-40' />
  //             <Text className='text-lg font-JakartaSemiBold mt-2'>Farm 3</Text>
  //             <Text className='text-lg font-JakartaSemiBold text-green-400'>View</Text>
  //           </View>
  //         </ScrollView>

  //         {/* <View className='flex flex-row justify-between mt-8'>
  //           <Text className='text-xl font-JakartaBold'>Recent Activity</Text>
  //           <TouchableOpacity>
  //             <Text className='text-lg font-JakartaSemiBold '>View All</Text>
  //           </TouchableOpacity>
  //         </View> */}

  //       </View>

  //       <View className='bg-green-300 mt-3 p-4 rounded-lg'>

  //         <View className='flex flex-row justify-between'>
  //           <Text className='text-xl font-JakartaBold'>Recent Activity</Text>
  //           <TouchableOpacity>
  //             <Text className='text-lg font-JakartaSemiBold '>View All</Text>
  //           </TouchableOpacity>
  //         </View>

  //         <ScrollView horizontal={true} className='flex flex-row mt-4 pb-10 mb-10' showsHorizontalScrollIndicator={false} >
  //           <View className='flex flex-col bg-white rounded-xl p-4 mr-4'>
  //             <Image source={require("../../../public/assets/images/farm.png")} width={10} height={20} className=' w-40 h-40' />
  //             <Text className='text-lg font-JakartaSemiBold mt-2'>Farm 1</Text>
  //             <Text className='text-lg font-JakartaSemiBold text-green-400'>View</Text>
  //           </View>

  //           <View className='flex flex-col bg-white rounded-xl p-4 mr-4'>
  //             <Image source={require("../../../public/assets/images/farm.png")} width={10} height={20} className=' w-40 h-40' />
  //             <Text className='text-lg font-JakartaSemiBold mt-2'>Farm 2</Text>
  //             <Text className='text-lg font-JakartaSemiBold text-green-400'>View</Text>
  //           </View>

  //           <View className='flex flex-col bg-white rounded-xl p-4 mr-4'>
  //             <Image source={require("../../../public/assets/images/farm.png")} width={10} height={20} className=' w-40 h-40' />
  //             <Text className='text-lg font-JakartaSemiBold mt-2'>Farm 3</Text>
  //             <Text className='text-lg font-JakartaSemiBold text-green-400'>View</Text>
  //           </View>
  //         </ScrollView>

  //         {/* <View className='flex flex-row justify-between mt-8'>
  //           <Text className='text-xl font-JakartaBold'>Recent Activity</Text>
  //           <TouchableOpacity>
  //             <Text className='text-lg font-JakartaSemiBold '>View All</Text>
  //           </TouchableOpacity>
  //         </View> */}
  //       </View>





  //     </ScrollView>

  //   </SafeAreaView>
  // )


  return (

    <SafeAreaView className='p-2 '>


      <ScrollView className=' flex gap-2' showsVerticalScrollIndicator={false}>

        {/* <View className='flex flex-row p-1 mb-2 justify-between items-center'>
          <Image source={require('p/public/assets/images/splashlogo.png')} className='w-16 h-16' />
          <Image source={require('p/public/assets/images/splashlogo.png')} className='w-16 h-16' />
          
          <Ionicons name="person" size={24} color="black" />
        </View> */}
        {/* <View className='h-[250px]  bg-green-700 rounded-3xl'> */}

        {/* <LinearGradient
          colors={['#BEE3CB', '#9DD0AF', '#4BA26A']} // Define the gradient colors
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          className='h-[250px]   rounded-3xl'
          style={{ height: 250, borderRadius: 24 }}
        >
          <View className='flex-row justify-between p-4'>
            <Text className='text-[70px] font-bold  text-white '>29.C</Text>
            <Image source={require("p/public/assets/images/clouds.png")} className='w-36 h-36' />
          </View>

          <View className='flex-row justify-between p-4'>
            <View>
              <Text className='text-3xl font-semibold  text-gray-400'>H:32°   L:27°</Text>
              <Text className='text-[30px] font-bold  text-white '>Satara, Dolegaon</Text>
            </View>
            <Text className='text-[30px] font-bold  text-white'>
              Cloudy
            </Text>
          </View>
        </LinearGradient> */}


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




        {/* </View> */}
        <TouchableOpacity onPress={() => router.push("/(root)/farm")} className="flex-row p-4 items-center bg-[#BEE3CB] mt-3 rounded-3xl shadow-lg justify-between">


          <View className="flex-row gap-4 items-center space-x-3">
            {/* Logo */}
            <Image
              source={require("p/public/assets/images/Group.png")}
              className="w-14 h-14 bg-white rounded-full p-2"
              style={{ borderWidth: 2, borderColor: "#81C784" }}
            />

            {/* Feature Title */}
            <View className=''>
              <Text className="text-2xl font-bold text-[#2E7D32]">Add Crops</Text>
              <Text className="text-sm text-gray-600">Quickly add crop details</Text>
            </View>
          </View>

          {/* Arrow Icon */}
          <View className="bg-[#4BA26A] rounded-full p-2">
            <FontAwesome6 name="arrow-right" size={20} color="white" />
          </View>


        </TouchableOpacity>




        <View className="p-4 bg-[#F0F8F5] flex-1">
          <Text className="text-3xl font-bold text-green-800 mb-6">
            Main Features
          </Text>

          {/* Two-Column Layout */}
          <View className="flex-row pb-32 flex-wrap justify-between">

            {/* Feature 1 */}
            <TouchableOpacity onPress={() => router.push("/(root)/(farm)/CropDiagnose")} className="w-[48%] mb-4 items-center p-4 bg-[#BEE3CB] rounded-xl shadow-md">
              <Image source={require("p/public/assets/images/farm.png")} className="w-20 h-20 bg-white rounded-full mb-3" resizeMode="contain" />
              <Text className="font-semibold text-green-800">Diagnose your crop</Text>
              <View className="flex-row justify-between items-center p-2 mt-3 rounded-lg w-full bg-[#4BA26A]">
                <Text className="text-lg font-bold text-white ">Crop Diagnose</Text>
                <Ionicons name="chevron-back" size={20} color="white" />
              </View>
            </TouchableOpacity>

            {/* Feature 2 */}
            <Pressable className="w-[48%] mb-4 items-center p-4 bg-[#BEE3CB] rounded-xl shadow-md">
              <Image source={require("p/public/assets/images/farm.png")} className="w-20 h-20 bg-white rounded-full mb-3" resizeMode="contain" />
              <Text className="font-semibold text-green-800">Soil Monitoring</Text>
              <View className="flex-row justify-between items-center p-2 mt-3 rounded-lg bg-[#4BA26A]">
                <Text className="text-lg font-bold text-white">Check Soil Health</Text>
                <Ionicons name="chevron-back" size={20} color="white" />
              </View>
            </Pressable>

            {/* Feature 3 */}
            <Pressable className="w-[48%] mb-4 items-center p-4 bg-[#BEE3CB] rounded-xl shadow-md">
              <Image source={require("p/public/assets/images/farm.png")} className="w-20 h-20 bg-white rounded-full mb-3" resizeMode="contain" />
              <Text className="font-semibold text-green-800">Weather Updates</Text>
              <View className="flex-row justify-between items-center p-2 mt-3 rounded-lg bg-[#4BA26A]">
                <Text className="text-lg font-bold text-white">Live Forecast</Text>
                <Ionicons name="chevron-back" size={20} color="white" />
              </View>
            </Pressable>

            {/* Feature 4 */}
            <Pressable className="w-[48%] mb-4 items-center p-4 bg-[#BEE3CB] rounded-xl shadow-md">
              <Image source={require("p/public/assets/images/farm.png")} className="w-20 h-20 bg-white rounded-full mb-3" resizeMode="contain" />
              <Text className="font-semibold text-green-800">Water Management</Text>
              <View className="flex-row justify-between items-center p-2 mt-3 rounded-lg bg-[#4BA26A]">
                <Text className="text-lg font-bold text-white">Irrigation Control</Text>
                <Ionicons name="chevron-back" size={20} color="white" />
              </View>
            </Pressable>
          </View>
        </View>


        <View className="p-4">

          <Image source={require("p/public/assets/images/pump.png")} className="w-[200px] h-14 " />

        </View>


      </ScrollView>
    </SafeAreaView>


  )




}

export default Home