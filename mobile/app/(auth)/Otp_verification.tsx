

import { View, Text, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OtpInput } from 'react-native-otp-entry'
import { useRouter } from 'expo-router'

const Otp_verification = () => {
    const router = useRouter()
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : "height"}
            className='flex-1 justify-center px-5'
        >
            <SafeAreaView>
            <Text className='text-center font-bold text-2xl'>Enter the Otp to Verify</Text>
            <Text className='text-center text-gray-600'>To continue first enter the One time password send to you in message</Text>
            <View className='mt-6'>
                <OtpInput
                    numberOfDigits={6}
                    onTextChange={(text) => console.log(`OTP text changed: ${text}`)}
                    onFilled={(text) => console.log(`OTP is fully filled: ${text}`)}
                    focusColor="green"
                    autoFocus={false}
                />
            </View>
            <View className='mt-10'>
                <Pressable
                    className='w-full py-4 rounded-lg bg-black'
                    onPress={() => router.push('/(tabs)')}
                >
                    <Text className='text-center text-lg font-bold text-white'>Enter Otp</Text>
                </Pressable>
            </View>
        </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Otp_verification