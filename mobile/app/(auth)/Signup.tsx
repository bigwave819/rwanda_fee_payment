import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { Link, useRouter } from 'expo-router'
import { useRegister } from '../../hooks/mutations'
import { useState } from 'react'
import { ActivityIndicator, Pressable } from 'react-native'

const Signup = () => {
  const router = useRouter();
  const { mutate: register, isPending } = useRegister();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    register({ fullName, email, phoneNumber, password }, {
      onSuccess: () => {
        router.replace('/(auth)/Login');
      },
      onError: (err) => {
        console.error("Signup failed", err);
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
          Sign Up
        </Text>

        <Text className="text-gray-500 text-center font-medium text-base mt-2">
          To continue using the application enter your valid username and password
        </Text>
      </View>

      {/* INPUT FULL NAME */}
      <View className="relative w-full mb-4">
        <View className="absolute left-3 top-6 z-10">
          <Ionicons name="person-outline" size={20} color="gray" />
        </View>
        <TextInput
          placeholder="Full Name"
          className="w-full border-2 border-black bg-white rounded-lg pl-10 py-4 text-lg"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      {/* INPUT EMAIL */}
      <View className="relative w-full mb-4">
        <View className="absolute left-3 top-6 z-10">
          <Ionicons name="mail-outline" size={20} color="gray" />
        </View>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          className="w-full border-2 border-black bg-white rounded-lg pl-10 py-4 text-lg"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* INPUT PHONE */}
      <View className="relative w-full mb-4">
        <View className="absolute left-3 top-6 z-10">
          <Ionicons name="call-outline" size={20} color="gray" />
        </View>
        <TextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          className="w-full border-2 border-black bg-white rounded-lg pl-10 py-4 text-lg"
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
          className="w-full border-2 border-black bg-white rounded-lg pl-10 py-4 text-lg"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* INPUT CONFIRM PASSWORD */}
      <View className="relative w-full mb-8">

        <View className="absolute left-3 top-6 z-10">
          <Ionicons name="lock-closed-outline" size={20} color="gray" />
        </View>

        <TextInput
          placeholder=" Confirm Password"
          secureTextEntry
          className="w-full border-2 border-black bg-white rounded-lg pl-10 py-4 text-lg"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* SIGNUP BUTTON */}
      <Pressable
        className={`w-full py-4 rounded-lg items-center ${isPending ? 'bg-gray-700' : 'bg-black'}`}
        onPress={handleSignup}
        disabled={isPending}
      >
        {isPending ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white font-bold text-lg">
            Sign Up
          </Text>
        )}
      </Pressable>

      {/** THE FOOTER */}
      <View>
        <Text className="text-center">Already have an account <Link href={`/(auth)/Login`} className="text-blue-500 underline">Login</Link></Text>
      </View>

    </SafeAreaView>
  )
}

export default Signup