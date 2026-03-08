

import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bell } from 'lucide-react-native'

const History = () => {
  const Transaction = [
    {
      id: 1,
      title: 'Electricity Payment',
      status: "COMPLETED",
      amount: 5000,
      date: "21 jan 2025 20:00 PM"
    },
    {
      id: 2,
      title: 'Electricity Payment',
      status: "COMPLETED",
      amount: 5000,
      date: "21 jan 2025 20:00 PM"
    },
    {
      id: 3,
      title: 'Electricity Payment',
      status: "COMPLETED",
      amount: 5000,
      date: "21 jan 2025 20:00 PM"
    }
  ]
  return (
    <SafeAreaView className='flex-1 w-full p-4 bg-white'>
      <Text className="text-3xl font-bold">Transaction History</Text>
      <Text className='text-blue-500 underline mt-5 text-xl font-bold uppercase'>Recent Transactions</Text>

      <View>
        {
          Transaction.map((items) => {
            return(
              <View key={items.id} className='p-4 my-4 flex-row justify-between items-end rounded-lg border border-gray-300'>
                <View>
                  <Text className='text-xl font-bold'>{items.title}</Text>
                  <Text className='text-green-500 text-lg'>{items.status}</Text>
                  <Text className='text-blue-500 text-md'>{items.amount} Frw</Text>
                </View>
                <Text className='text-gray-400'>{items.date}</Text>
              </View>
            )
          })
        }
      </View>
    </SafeAreaView>
  )
}

export default History