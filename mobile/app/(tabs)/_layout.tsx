import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown: false
        }}
    >
        <Tabs.Screen 
            name='index'
            options = {{
                title: 'Home'
            }}
        />
        <Tabs.Screen 
            name='History'
            options = {{
                title: 'History'
            }}
        />
        <Tabs.Screen 
            name='Profile'
            options = {{
                title: 'Profile'
            }}
        />
    </Tabs>
  )
}

export default TabLayout