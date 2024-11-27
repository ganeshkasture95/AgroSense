
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    // send a POST  request to the backend API to register the user
    axios
      .post("http://10.0.2.2:3000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "An error occurred while registering"
        );
        console.log("registration failed", error);
      });


    router.push("/login")
  }

  

  // return (
  //   <SafeAreaView>
  //     <View className='flex bg-white h-full w-full items-center'>

  //       <View className='blok items-center mt-14'>
  //         {/* <Image source={require("p/public/assets/images/multilove.png")} className='w-60 h-60' /> */}
  //         <Text className=' font-extrabold text-3xl ' >
  //           LoveLink
  //         </Text>
  //       </View>

  //       <KeyboardAvoidingView className='w-full px-10'>

  //         <View className='w-full mt-16 flex items-center'>
  //           <Text className='text-4xl font-semibold pb-10'>Create an Account</Text>
  //         </View>

  //         <View className='w-full'>
  //           <View className='flex gap-4 flex-row w-full p-4 px-10 rounded-full text-2xl border-2 border-red-700  '>
  //             <Ionicons name="person-sharp" size={24} color="gray" />
  //             <TextInput className=' w-full text-xl items-center ' placeholder='Enter Your Name' cursorColor={"transparent"} placeholderTextColor={"gray"}
  //               value={name} onChangeText={(text) => setName(text)} />
  //           </View>

  //           <View className='flex gap-4 mt-4 flex-row w-full p-4 px-10 rounded-full text-2xl border-2 border-red-700  '>
  //             <MaterialCommunityIcons name="email" size={24} color="gray" />
  //             <TextInput className=' w-full text-xl items-center ' placeholder='Enter your Email' cursorColor={"transparent"} placeholderTextColor={"gray"} value={email} onChangeText={(text) => setEmail(text)} />
  //           </View>

  //           <View className='flex gap-4 mt-4 flex-row w-full p-4 px-10 rounded-full text-2xl border-2 border-red-700  '>
  //             <Feather name="lock" size={24} color="gray" />
  //             <TextInput className=' w-full text-xl items-center ' placeholder='Enter your Password' cursorColor={"transparent"} placeholderTextColor={"gray"}
  //               value={password} onChangeText={(text) => setPassword(text)} />
  //           </View>

  //         </View>



  //         <Pressable onPress={handleRegister}>
  //           <View className='w-full mt-16 bg-red-700 p-4 rounded-full items-center'>
  //             <Text className='text-white text-xl font-semibold'>Register</Text>
  //           </View>
  //         </Pressable>


  //         <View className='w-full mt-2 flex-row items-center justify-center'>
  //           <Text className='text-xl font-semibold'>Have an account?</Text>
  //           <Pressable onPress={() => router.push("/(auth)/login")}>
  //             <Text className='text-red-700 text-xl font-semibold'> Login</Text>
  //           </Pressable>
  //         </View>

  //       </KeyboardAvoidingView>
  //     </View>
  //   </SafeAreaView>
  // )


  return (
    <SafeAreaView className="p-2 bg-[#F0F8F5]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Gradient */}
        <LinearGradient
          colors={['#BEE3CB', '#9DD0AF', '#4BA26A']}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          className="rounded-3xl shadow-lg"
          style={{ height: 200, borderRadius: 24, overflow: 'hidden' }}
        >
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
          <Image source={require("p/public/assets/images/splashlogo.png")} className="w-20 h-20 pb-2" />
            <Text className="text-3xl font-bold  shadow-lg">
              Welcome to AgroCare
            </Text>
          </View>
  
          <View className="px-6 mt-4">
            <Text className="text-xl font-JakartaBold ">
              Create an account to start managing your crops!
            </Text>
          </View>
        </LinearGradient>
  
        {/* Registration Form */}
        <View className="flex bg-white h-full w-full items-center mt-10">
          <KeyboardAvoidingView className="w-full px-10">
            <View className="w-full mt-10 flex items-center">
              <Text className="text-3xl font-bold text-green-800 pb-10">
                Create an Account
              </Text>
            </View>
  
            {/* Name Input */}
            <View className="flex gap-4 flex-row w-full p-4 rounded-full text-2xl border-2 border-green-700 bg-white shadow-md">
              <Ionicons name="person-sharp" size={24} color="gray" />
              <TextInput
                className="w-full text-xl"
                placeholder="Enter Your Name"
                cursorColor="green"
                placeholderTextColor="gray"
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
  
            {/* Email Input */}
            <View className="flex gap-4 mt-4 flex-row w-full p-4 rounded-full text-2xl border-2 border-green-700 bg-white shadow-md">
              <MaterialCommunityIcons name="email" size={24} color="gray" />
              <TextInput
                className="w-full text-xl"
                placeholder="Enter your Email"
                cursorColor="green"
                placeholderTextColor="gray"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
  
            {/* Password Input */}
            <View className="flex gap-4 mt-4 flex-row w-full p-4 rounded-full text-2xl border-2 border-green-700 bg-white shadow-md">
              <Feather name="lock" size={24} color="gray" />
              <TextInput
                className="w-full text-xl"
                placeholder="Enter your Password"
                cursorColor="green"
                placeholderTextColor="gray"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
            </View>
  
            {/* Register Button */}
            <Pressable onPress={handleRegister}>
              <View className="w-full mt-10 bg-green-700 p-4 rounded-full items-center shadow-md">
                <Text className="text-white text-xl font-semibold">Register</Text>
              </View>
            </Pressable>
  
            {/* Redirect to Login */}
            <View className="w-full mt-16 flex-row items-center justify-center">
              <Text className="text-xl font-semibold text-gray-700">
                Already have an account?
              </Text>
              <Pressable onPress={() => router.push("/(auth)/login")}>
                <Text className="text-green-700 text-xl font-semibold">
                  Login
                </Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  
}

export default Register

const styles = StyleSheet.create({});