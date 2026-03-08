

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bell, Phone, UserCheck, Lock, Palette, ChevronRight, LogOut } from 'lucide-react-native'

const Profile = () => {
  const navigations = [
    {
      id: 1,
      name: 'Security',
      icon: <Lock />
    },
    {
      id: 2,
      name: 'Theme',
      icon: <Palette />
    },
    {
      id: 3,
      name: 'Notifications',
      icon: <Bell />
    }
  ]
  return (
    <SafeAreaView className='flex-1 px-5 w-full bg-white'>
      <Text className='text-4xl font-bold mt-5'>Profile</Text>

      <View className='mt-20'>
        <View className='flex-row px-3 items-center justify-between'>
          <UserCheck size={22} className='font-bold' />
          <Text className='text-md font-medium'>Munyabugingo Hirwa Tresor Christian</Text>
        </View>
        <View className='flex-row px-3 items-center mt-3'>
          <Phone size={22} className='font-bold' />
          <Text className='ml-8 text-md font-medium'>0798342542</Text>
        </View>
      </View>

      <View className="border-b border-gray-200 my-8" />

      <View>
        {
          navigations.map((items) => {
            return (
              <View key={items.id} className='flex-row justify-between items-center my-3'>
                <View className='flex-row'>
                  {items.icon}
                  <Text className='ml-5'>{items.name}</Text>
                </View>
                <ChevronRight size={22} />
              </View>
            )
          })
        }
      </View>

      <View className="border-b border-gray-200 my-8" />

      <TouchableOpacity className='flex-row items-center'>
        <LogOut className='text-red-500 bg-red-500 text-lg'/>
        <Text className='text-red-500 font-bold text-lg ml-5'>Logout</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Profile