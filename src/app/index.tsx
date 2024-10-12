import { Redirect } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView className="flex items-center ">
        <Redirect  href={"/(root)/home"} />
    </SafeAreaView>
  );
}