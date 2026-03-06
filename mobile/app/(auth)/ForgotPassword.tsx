

import { View, Text, KeyboardAvoidingView, Platform, TextInput, Pressable } from 'react-native'
import React from 'react'

const ForgotPassword = () => {
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : "height"}
        className='flex-1 px-5 justify-center'
    >
        <View className=''>
            <Text className='text-center font-bold text-3xl'>Forgot Password</Text>
        </View>

        <View className='mt-10'>
            <TextInput 
                placeholder='Enter Phone Number'
                className='w-full border-2 border-black px-4 py-4 rounded-lg'
                keyboardType='phone-pad'
            />

            <Pressable className='w-full rounded-lg bg-black py-5 mt-10'>
                <Text className='text-center text-white text-lg'>Submit</Text>
            </Pressable>
        </View>
    </KeyboardAvoidingView>
  )
}

export default ForgotPassword