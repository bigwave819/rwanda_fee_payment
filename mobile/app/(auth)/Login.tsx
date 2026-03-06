import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

const Login = () => {
  return (
    <SafeAreaView className="flex-1 items-center px-6 bg-white">

      {/* THE CIRCLE */}
      <View className="w-40 h-40 rounded-full bg-gray-100 mb-10 items-center justify-center">
        <Ionicons name="log-in-outline" size={60} color="black" />
      </View>

      {/* WELCOME TITLE */}
      <View className="mb-8">
        <Text className="font-bold text-2xl text-center">
          Welcome Again
        </Text>

        <Text className="text-gray-500 text-center font-medium text-base mt-2">
          To continue using the application enter your valid username and password
        </Text>
      </View>

      {/* INPUT PHONE */}
      <View className="relative w-full mb-4">

        <View className="absolute left-3 top-6 z-10">
          <Ionicons name="call-outline" size={20} color="gray" />
        </View>

        <TextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          className="w-full border-2 border-black bg-white rounded-lg pl-10 py-5 text-lg"
        />
      </View>

      {/* INPUT PASSWORD */}
      <View className="relative w-full mb-4">

        <View className="absolute left-3 top-6 z-10">
          <Ionicons name="lock-closed-outline" size={20} color="gray" />
        </View>

        <TextInput
          placeholder="Password"
          secureTextEntry
          className="w-full border-2 border-black bg-white rounded-lg pl-10 py-5 text-lg"
        />
      </View>

      {/* FORGOT PASSWORD */}
      <View className="w-full items-end mb-6">
        <Text className="text-black font-medium">
          <Link href={`/(auth)/ForgotPassword`}>Forgot Password?</Link>
        </Text>
      </View>

      {/* LOGIN BUTTON */}
      <View className="w-full bg-black py-4 rounded-lg items-center">
        <Text className="text-white font-bold text-lg">
          Login
        </Text>
      </View>

      {/** THE FOOTER */}
      <View>
        <Text className="text-center">Don't have an account <Link href={`/(auth)/Signup`} className="text-blue-500 underline">Sign Up</Link></Text>
      </View>

    </SafeAreaView>
  )
}

export default Login