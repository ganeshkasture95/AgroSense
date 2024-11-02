import React from 'react'
import { Image, Text, View } from 'react-native'

const RealTimeData = ({ name, data,icon }) => {
    return (
        <View className='flex p-2 bg-white
        rounded-lg px-6 mx-2 h-fit'>
            <View className='flex flex-row justify-between'>
                <Text className='text-lg font-JakartaSemiBold'>{name}</Text>
                <Image source={icon}  className='w-10 h-10'/>
            </View>
            <View>
                <Text className='text-4xl font-JakartaBold '>{data}</Text>
            </View>
        </View>
    )
}

export default RealTimeData