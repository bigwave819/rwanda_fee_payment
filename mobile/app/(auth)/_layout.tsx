

import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='index' />
      <Stack.Screen name='Login' />
      <Stack.Screen name='Signup' />
      <Stack.Screen name='ForgotPassword' />
    </Stack>
  )
}

export default AuthLayout