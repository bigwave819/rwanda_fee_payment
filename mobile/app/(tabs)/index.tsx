import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bell, ChevronRight } from 'lucide-react-native'
import { useRouter } from 'expo-router'

const Index = () => {

  const router = useRouter();


  const Services = [
    {
      id: 1,
      name: "Pay Garbage Collection",
      details: 'pay the monthly garbage collection '
    },
    {
      id: 2,
      name: "Pay Garbage Collection",
      details: 'pay the monthly garbage collection '
    },
    {
      id: 3,
      name: "Pay Garbage Collection",
      details: 'pay the monthly garbage collection '
    }
  ];


  const Transactions = [
    {
      id: 1,
      title: 'Garbage Collection',
      date: '21 january 2026 10:40',
      amount: '3000'
    },
    {
      id: 2,
      title: 'Garbage Collection',
      date: '21 january 2026 10:40',
      amount: '3000'
    },
    {
      id: 3,
      title: 'Garbage Collection',
      date: '21 january 2026 10:40',
      amount: '3000'
    }
  ]

  return (
    <SafeAreaView className="flex-1 px-5 bg-white">
      {/** HEADER */}
      <View className='flex-row justify-between items-center mt-5'>
        <View>
          <View className='flex-row items-center'>
            <Text className='font-bold text-xl'>Hello</Text>
            <Text className='text-blue-500'>Tresor</Text>
          </View>
          <Text className="text-gray-500">What Would You Like to Do?</Text>
        </View>

        <Pressable 
          className='bg-gray-200 p-2.5 rounded-full'
          onPress={() => router.push('/notifications')}
        >
          <Bell size={22} color="#4B5563" />
        </Pressable>
      </View>

      <Text className='text-4xl font-bold mt-5'>
        Actions
      </Text>

      <View>
        {
          Services.map((items) => {
            return (
              <View key={items.id} className='flex-row justify-between my-3 border p-3 rounded-lg border-gray-300'>
                <View>
                  <Text className='font-bold text-xl'>{items.name}</Text>
                  <Text className='text-md text-gray-400'>{items.details}</Text>
                </View>

                <View className='border border-gray-300 p-3 rounded-full'>
                  <ChevronRight size={20} />
                </View>
              </View>
            )
          })
        }
      </View>

      <Text className='text-green-500 text-2xl font-bold underline'>Recent Transactions</Text>

      <View>
        {
          Transactions.map((items) => {
            return (
              <View key={items.id} className='flex-row justify-between items-center p-4 my-4 rounded-xl border border-gray-300'>
                <View>
                  <Text className='text-lg font-bold'>{items.title}</Text>
                  <Text className='text-gray-400'>{items.date}</Text>
                </View>

                <Text className='text-xl font-bold text-blue-600'>{items.amount} Frw</Text>
              </View>
            )
          })
        }
      </View>
    </SafeAreaView>
  )
}

export default Index