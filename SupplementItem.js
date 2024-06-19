import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SupplementItem = ({ name, price, onIncrement, onDecrement }) => {
  const { width, height } = useWindowDimensions();
  const [quantity, setQuantity] = useState(0);

  const cleanPrice = parseFloat(price.replace(/[^\d.-]/g, ""));

  const increment = () => {
    if (quantity < 1) {
      setQuantity(quantity + 1);
      onIncrement(cleanPrice, name);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onDecrement(cleanPrice, name);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        // backgroundColor: "blue",
        width: width - 40,
        paddingVertical: 10,
      }}
    >
      <Text style={{ flex: 1.5, fontSize: 16 }}>{name}</Text>
      <Text
        style={{
          flex: 1,
          fontSize: 16,
          textAlign: "right",
          justifyContent: "flex-end",
        }}
      >
        {price === "0.00€" ? "Gratis" : price}
      </Text>
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={decrement}
          style={{
            padding: 5,
            backgroundColor: "#e0e0e0",
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 5,
          }}
        >
          <Ionicons name="remove" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, marginHorizontal: 10 }}>{quantity}</Text>
        <TouchableOpacity
          onPress={increment}
          style={{
            padding: 5,
            backgroundColor: "#e0e0e0",
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 5,
          }}
        >
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SupplementItem;
