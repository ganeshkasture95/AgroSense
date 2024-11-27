import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='landing'/>
        <Stack.Screen name='login'/>
        <Stack.Screen name='register'/>
    </Stack>

  );
}
