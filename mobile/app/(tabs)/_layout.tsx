import React from 'react'
import { Tabs } from 'expo-router'
import { LayoutDashboard, ArrowLeftRight, UserRoundPen } from 'lucide-react-native'

const TabLayout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: '#6b7280'
        }}
    >
        <Tabs.Screen 
            name='index'
            options = {{
                title: 'Home',
                tabBarIcon: ({color, size}) => <LayoutDashboard size={22} color={color} className='font-bold'/>
            }}
        />
        <Tabs.Screen 
            name='History'
            options = {{
                title: 'History',
                tabBarIcon: ({color, size}) => <ArrowLeftRight size={22} color={color}  className='font-bold'/>
            }}
        />
        <Tabs.Screen 
            name='Profile'
            options = {{
                title: 'Profile',
                tabBarIcon: ({color, size}) => <UserRoundPen size={22} color={color}  className='font-bold'/>
            }}
        />
    </Tabs>
  )
}

export default TabLayout