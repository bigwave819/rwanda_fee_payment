import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bell, Ellipsis } from 'lucide-react-native'

const Notifications = () => {

  const notifications = [
    {
      id: 1,
      name: "Remaining 3 days to pay",
      details: "3 days left to pay the bill of the garbage collection"
    },
    {
      id: 2,
      name: "Remaining 3 days to pay",
      details: "3 days left to pay the bill of the garbage collection"
    },
    {
      id: 3,
      name: "Remaining 3 days to pay",
      details: "3 days left to pay the bill of the garbage collection"
    },
    {
      id: 4,
      name: "Remaining 3 days to pay",
      details: "3 days left to pay the bill of the garbage collection"
    },
  ]

  return (
    <SafeAreaView className="flex-1 w-full p-5 bg-white">

      <Text className="text-3xl font-bold mb-4">Notifications</Text>

      <View>

        {notifications.map((item) => (
          
          <View
            key={item.id}
            className="flex-row items-center p-3 my-3 bg-gray-100 rounded-lg"
          >

            {/* Icon */}
            <View className="bg-green-200 p-2 rounded-full mr-3">
              <Bell size={20} />
            </View>

            {/* Text Container */}
            <View className="flex-1">

              <Text
                className="font-bold text-lg"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.name}
              </Text>

              <Text
                className="text-gray-400"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.details}
              </Text>

            </View>

            {/* Options */}
            <View className="ml-3 p-2 rounded-full border border-gray-300">
              <Ellipsis size={20} />
            </View>

          </View>

        ))}

      </View>

    </SafeAreaView>
  )
}

export default Notifications