import React from "react";
import {
  Button,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const StackScreen = ({ route }) => {
  const { nombre, fullNombre, imageURL, apellido, correo } = route.params;

  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{ uri: imageURL }}
          style={{
            height: 180,
            width: 180,
            borderRadius: 90,
            marginVertical: 30,
            borderWidth: 2,
            borderColor: "#292929",
          }}
        />
        <Text style={{ fontSize: 25 }}>{fullNombre}</Text>
        <View style={{ marginTop: 25 }}>
          <Text style={{ paddingBottom: 10, fontSize: 16 }}>Nom:</Text>
          <View
            style={{
              backgroundColor: "#E8E8E8",
              padding: 10,
              paddingHorizontal: 30,
              borderRadius: 15,
              borderWidth: 1.5,
              borderColor: "#6565658e",
              width: 350,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#656565ff",
                fontSize: 18,
              }}
            >
              {nombre}
            </Text>
          </View>
          <Text style={{ paddingVertical: 10, fontSize: 16 }}>Cognom:</Text>
          <View
            style={{
              backgroundColor: "#E8E8E8",
              padding: 10,
              paddingHorizontal: 30,
              borderRadius: 15,
              borderWidth: 1.5,
              borderColor: "#6565658e",
              width: 350,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#656565ff",
                fontSize: 18,
              }}
            >
              {apellido}
            </Text>
          </View>
          <Text style={{ paddingVertical: 10, fontSize: 16 }}>Correu:</Text>

          <View
            style={{
              backgroundColor: "#E8E8E8",
              padding: 10,
              paddingHorizontal: 30,
              borderRadius: 15,
              borderWidth: 1.5,
              borderColor: "#6565658e",
              width: 350,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#656565ff",
                fontSize: 18,
              }}
            >
              {correo}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginVertical: 35,
            width: 350,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#406418",
            padding: 15,
            borderRadius: 25,
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default StackScreen;
