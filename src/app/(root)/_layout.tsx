import { Ionicons } from '@expo/vector-icons'; // You can use other icon sets if you prefer

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Farm from './farm';
import Home from './home';
import Profile from './profile';

const Tabs = createBottomTabNavigator();

const RootLayout = () => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'farm') {
                        iconName = focused ? 'leaf' : 'leaf-outline';
                    } else if (route.name === 'profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    // You can return any component that you like here
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#2e8b57',  // Active icon color
                tabBarInactiveTintColor: '#gray',   // Inactive icon color
                tabBarStyle: {
                    position: 'absolute',           // Makes the tab bar float
                    bottom: 10,                     // Moves it slightly up from the bottom
                    left: 10,                       // Adds space from left
                    right: 10,                      // Adds space from right
                    backgroundColor: '#DBDDDE',    // Background color for tab bar
                    borderRadius: 20,               // Makes the tab bar rounded
                    height: 60,                     // Adjust height
                    paddingBottom: 5,               // Padding
                    elevation: 5,                   // Adds shadow for Android
                    shadowColor: '#000',            // Shadow for iOS
                    shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: 10 },
                    shadowRadius: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,                   // Font size for labels
                    fontWeight: '600',              // Font weight
                }
            })}
        >
            <Tabs.Screen name="home" component={Home} options={{ title: 'Home', headerShown:false }} />
            <Tabs.Screen name="farm" component={Farm} options={{ title: 'Farm' }} />
            <Tabs.Screen name="profile" component={Profile} options={{ title: 'Profile' }} />
        </Tabs.Navigator>
    );
};

export default RootLayout;
