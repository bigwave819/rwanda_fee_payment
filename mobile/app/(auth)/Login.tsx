import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { Link, useRouter } from 'expo-router'
import { useLogin } from '../../hooks/mutations'
import { useState } from 'react'
import { ActivityIndicator } from 'react-native'

const Login = () => {
  const router = useRouter()
  const { mutate: login, isPending } = useLogin();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login({ phoneNumber, password }, {
      onSuccess: () => {
        router.replace('/(tabs)');
      },
      onError: (err) => {
        console.error("Login failed", err);
      }
    });
  }

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
          value={phoneNumber}
          onChangeText={setPhoneNumber}
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
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* FORGOT PASSWORD */}
      <View className="w-full items-end mb-6">
        <Text className="text-black font-medium">
          <Link href={`/(auth)/ForgotPassword`}>Forgot Password?</Link>
        </Text>
      </View>

      {/* LOGIN BUTTON */}
      <Pressable
        className={`w-full py-4 rounded-lg items-center ${isPending ? 'bg-gray-700' : 'bg-black'}`}
        onPress={handleLogin}
        disabled={isPending}
      >
        {isPending ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white font-bold text-lg">
            Login
          </Text>
        )}
      </Pressable>

      {/** THE FOOTER */}
      <View>
        <Text className="text-center">Don't have an account <Link href={`/(auth)/Signup`} className="text-blue-500 underline">Sign Up</Link></Text>
      </View>

    </SafeAreaView>
  )
}

export default Login