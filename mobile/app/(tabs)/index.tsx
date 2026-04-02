import { View, Text, Pressable, ActivityIndicator } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bell, ChevronRight } from 'lucide-react-native'
import { useRouter } from 'expo-router'
import { useServices, useUserBills } from '../../hooks/queries'
import { useCreatePaymentMock } from '../../hooks/mutations'

const Index = () => {
  const router = useRouter();

  const { data: services, isLoading: isLoadingServices } = useServices();
  const { data: userBills, isLoading: isLoadingBills } = useUserBills();
  const { mutate: payBill, isPending: isPaying } = useCreatePaymentMock();

  return (
    <SafeAreaView className="flex-1 px-5 bg-white">
      {/** HEADER */}
      <View className='flex-row justify-between items-center mt-5'>
        <View>
          <View className='flex-row items-center'>
            <Text className='font-bold text-xl'>Hello</Text>
            <Text className='text-blue-500'> User</Text>
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

      <Text className='text-4xl font-bold mt-5 mb-2'>
        Services
      </Text>

      <View>
        {isLoadingServices ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : services?.map((item: any) => (
          <View key={item.id} className='flex-row justify-between my-2 border p-3 rounded-lg border-gray-300 items-center'>
            <View>
              <Text className='font-bold text-xl'>{item.name}</Text>
              <Text className='text-md text-gray-400'>{item.description || 'Pay service fee'}</Text>
            </View>
            <View className='border border-gray-300 p-2 rounded-full'>
              <ChevronRight size={20} color="#4B5563" />
            </View>
          </View>
        ))}
        {!isLoadingServices && (!services || services.length === 0) && (
          <Text className="text-gray-500 mt-2">No services available</Text>
        )}
      </View>

      <Text className='text-green-500 text-2xl font-bold underline mt-6 mb-2'>Pending Bills</Text>

      <View>
        {isLoadingBills ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : userBills?.filter((b: any) => b.status === 'PENDING').map((bill: any) => (
          <View key={bill.id} className='flex-row justify-between items-center p-4 my-2 rounded-xl border border-gray-300'>
            <View>
              <Text className='text-lg font-bold'>Bill for Service</Text>
              <Text className='text-gray-400 font-medium mb-1 line-through decoration-transparent'>
                Due: {new Date(bill.dueDate).toLocaleDateString()}
              </Text>
              <Pressable
                className={`px-4 py-2 rounded-lg ${isPaying ? 'bg-gray-400' : 'bg-blue-600'}`}
                disabled={isPaying}
                onPress={() => payBill(bill.id)}
              >
                <Text className="text-white font-bold">{isPaying ? 'Paying...' : 'Pay Now'}</Text>
              </Pressable>
            </View>

            <Text className='text-xl font-bold text-blue-600'>{bill.amount} Frw</Text>
          </View>
        ))}
        {!isLoadingBills && (!userBills || userBills.filter((b: any) => b.status === 'PENDING').length === 0) && (
          <Text className="text-gray-500 mt-2">You have no pending bills.</Text>
        )}
      </View>
    </SafeAreaView>
  )
}

export default Index