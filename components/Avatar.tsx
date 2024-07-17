import { Image } from "@gluestack-ui/themed";
import React from "react";

export default function Avatar() {
  return (
    <Image
      size="md"
      borderRadius={9999}
      source={{
        uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      }}
    />
  )
}