import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FarmPage from '../farm';
import CropDiagnose from './CropDiagnose';
import SoilMonitoring from './SoilMonitoring';

const Tabs = createMaterialTopTabNavigator();

const FarmLayout = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F8F5' }}>
            
            <Tabs.Navigator
                screenOptions={{
                    tabBarScrollEnabled: true, // Enable scrolling for long titles
                    tabBarActiveTintColor: '#2e8b57',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        backgroundColor: '#DBDDDE',
                        borderRadius: 12,
                        marginHorizontal: 10,
                        height: 65,
                        marginBottom: 10,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                    },
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontWeight: '700',
                        textTransform: 'capitalize',
                        paddingHorizontal: 2, // Adds space around text
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: '#2e8b57',
                        height: 4,
                        borderRadius: 2,
                        width: '20%', // Keeps indicator aligned with tabs
                        marginLeft: '3%', // Adjusts alignment if needed
                    },
                    tabBarItemStyle: {
                        width: 120, // Increase width for readability
                        paddingVertical: 8,
                        justifyContent: 'center', // Center the content
                    },
                }}
            >
                <Tabs.Screen
                    name="CropDiagnose"
                    component={CropDiagnose}
                    options={{
                        title: 'Diagnose',
                        tabBarIcon: ({ color }) => <Ionicons name="leaf" size={20} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="Farm"
                    component={FarmPage}
                    options={{
                        title: 'Farm',
                        tabBarIcon: ({ color }) => <Ionicons name="analytics" size={20} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="SoilMonitoring"
                    component={SoilMonitoring}
                    options={{
                        title: 'Soil',
                        tabBarIcon: ({ color }) => <Ionicons name="water" size={20} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="IrrigationSystem"
                    component={SoilMonitoring}
                    options={{
                        title: 'Irrigation',
                        tabBarIcon: ({ color }) => <Ionicons name="rainy" size={20} color={color} />,
                    }}
                />
            </Tabs.Navigator>
        </SafeAreaView>
    );
};

export default FarmLayout;
