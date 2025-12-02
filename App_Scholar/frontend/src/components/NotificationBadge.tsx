import React from "react";
import { View, Text } from "react-native";

export default function NotificationBadge({ count }: { count: number }) {
  if (count <= 0) return null;

  return (
    <View
      style={{
        backgroundColor: "red",
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2,
        position: "absolute",
        top: -4,
        right: -10,
      }}
    >
      <Text style={{ color: "white", fontSize: 12 }}>{count}</Text>
    </View>
  );
}
