import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";

const index = () => {
  const router = useRouter()
  return (
    <SafeAreaView className="w-full flex-1 justify-between px-5 bg-white">
      {/** THE TITLE */}
      <View className="mt-52 text-center">
        <Text className="font-bold text-3xl text-center">City Pay!</Text>
      </View>

      {/** THE CENTER */}
      <View>
        <Text className="text-center mb-3 font-bold text-xl">Welcome !</Text>
        <Pressable 
          className="w-full bg-black py-4 mb-10 rounded-md"
          onPress={() => router.push('/(auth)/Login')}
        >
          <Text className="text-white font-bold text-center">Login</Text>
        </Pressable>
        <Text className="font-medium text-center">
          By logging you accept{" "}
          <Link href={`/(auth)/Login`} className="text-blue-500 underline">
            terms & conditions
          </Link>{" "}
          and
          <Link href={`/(auth)/Login`} className="text-blue-500 underline">
            {" "}
            private policy{" "}
          </Link>
          of Garbage Collections
        </Text>
      </View>

      {/** THE FOOTER */}
      <View className="mt-10">
        <Text className="text-center">Don't have an account <Link href={`/(auth)/Signup`} className="text-blue-500 underline">Sign Up</Link></Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
