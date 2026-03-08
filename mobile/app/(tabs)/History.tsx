

import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bell } from 'lucide-react-native'

const History = () => {
  return (
    <SafeAreaView>
      {/** HEADER */}
      <View className='flex-row justify-between items-center'>
        <View>
          <Text className="text-lg font-semibold">Hello Tresor</Text>
          <Text className="text-gray-500">What Would You Like to Do?</Text>
        </View>

        <View className='bg-gray-200 p-2.5 rounded-full'>
          <Bell size={22} color="#4B5563" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default History