import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Irrigation = () => {
    const [isIrrigationOn, setIrrigationOn] = useState(false);
    const [waterSprayed, setWaterSprayed] = useState(0); // Amount of water sprayed in liters

    // Simulate water usage (fetch data here if connected to real-time sensor data)
    useEffect(() => {
        let interval;
        if (isIrrigationOn) {
            interval = setInterval(() => {
                setWaterSprayed(prev => prev + 0.5); // Increment by 0.5 liters every second
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isIrrigationOn]);

    const toggleIrrigation = () => {
        setIrrigationOn(!isIrrigationOn);
    };
    return (
        <ScrollView>
            <Text>Irrigation Page</Text>
            <Image source={require('p/public/assets/images/landphoto.png')}  />

            <View className="flex-1 items-center justify-center bg-gray-100 p-6 pb-20">
                {/* Header */}
                <Text className="text-2xl font-bold text-gray-800">Irrigation Control</Text>

                {/* Water Usage Display */}
                <View className="my-8 p-4 bg-white rounded-lg shadow-lg w-4/5">
                    <Text className="text-lg text-gray-700">Water Sprayed:</Text>
                    <Text className="text-4xl font-semibold text-green-500">
                        {waterSprayed.toFixed(1)} L
                    </Text>
                </View>

                {/* Toggle Button */}
                <TouchableOpacity
                    onPress={toggleIrrigation}
                    className={`w-32 h-32 rounded-full bg-${isIrrigationOn ? 'red-500' : 'green-500'} flex items-center justify-center shadow-lg`}
                >
                    <Feather
                        name={isIrrigationOn ? "pause" : "play"}
                        size={20}
                        color="green"
                    />
                    <Text className=" text-lg mt-2">
                        {isIrrigationOn ? "Stop" : "Start"}
                    </Text>
                </TouchableOpacity>


            </View>

            <View>
                <View className='flex rounded-full w-52'>

                </View>
            </View>
        </ScrollView>
    );
}

export default Irrigation