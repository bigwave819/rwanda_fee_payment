import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUserBills } from '../../hooks/queries'
import { useFocusEffect } from 'expo-router'
import { useQueryClient } from '@tanstack/react-query'

const History = () => {
  const queryClient = useQueryClient();
  const { data: bills, isLoading } = useUserBills();

  // Refresh bills when History tab is focused
  useFocusEffect(
    React.useCallback(() => {
      queryClient.invalidateQueries({ queryKey: ['userBills'] });
    }, [])
  );

  const completedBills = bills?.filter((b: any) => b.status === 'PAID') || [];

  return (
    <SafeAreaView className='flex-1 w-full p-4 bg-white'>
      <Text className="text-3xl font-bold">Transaction History</Text>
      <Text className='text-blue-500 underline mt-5 text-xl font-bold uppercase'>Recent Transactions</Text>

      <ScrollView className="flex-1 mt-4">
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : completedBills.map((item: any) => (
          <View key={item.id} className='p-4 my-3 flex-row justify-between items-end rounded-lg border border-gray-300'>
            <View>
              <Text className='text-xl font-bold'>Payment #{item.id.slice(0, 5)}</Text>
              <Text className='text-green-500 text-lg font-bold'>{item.status}</Text>
              <Text className='text-blue-500 text-md'>{item.amount} Frw</Text>
            </View>
            <Text className='text-gray-400'>{new Date(item.updatedAt).toLocaleDateString()}</Text>
          </View>
        ))}

        {!isLoading && completedBills.length === 0 && (
          <Text className="text-gray-500 mt-4 text-center">No completed transactions found.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default History