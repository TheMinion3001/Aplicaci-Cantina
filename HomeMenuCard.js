import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import burguer from "../../assets/Imagenes/burguer.png";

import { Fontisto } from "@expo/vector-icons";
import Svg, { Defs, RadialGradient, Stop, Rect } from "react-native-svg";

import { useNavigation } from "@react-navigation/native";

const RadialGradientBackground = () => {
  return (
    <View>
      <Svg height="100%" width="100%">
        <Defs>
          <RadialGradient
            id="grad"
            cx="50%"
            cy="50%"
            rx="50%"
            ry="50%"
            fx="50%"
            fy="50%"
          >
            <Stop offset="0%" stopColor="rgba(255,229,179,1)" />
            <Stop offset="82%" stopColor="rgba(225,179,88,1)" />
            <Stop offset="100%" stopColor="rgba(225,166,51,1)" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
    </View>
  );
};

const Card = ({
  titulo,
  descripcion,
  precio,
  imagen,
  last,
  first,
  ruta,
  suplements,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "white",
        height: 250,
        width: 180,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        marginRight: last ? 25 : 0,
        marginLeft: first ? 25 : 15,
      }}
    >
      <View
        style={{
          flex: 4.5,
          borderRadius: 20,
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        <RadialGradientBackground />

        <Image
          source={imagen}
          style={{
            width: "80%",
            height: "80%",
            position: "absolute",
            alignSelf: "center",
            margin: 40,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 5, paddingHorizontal: 10, paddingBottom: 10 }}>
        <View style={{ flex: 1.5 }}>
          <Text
            style={{
              flex: 1,
              fontSize: titulo.length > 18 ? 14 : 18,
              fontWeight: "bold",
              marginVertical: 2,
              marginBottom: 4,
              paddingTop: titulo.length > 18 ? 2 : 0,
            }}
          >
            {titulo}
          </Text>
          <Text
            style={{
              flex: 2,
              fontSize: 12,
              textAlign: "justify",
              lineHeight: 16,
            }}
          >
            {descripcion}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: "#E8E8E8",
              width: 80,
              height: 37,
              borderRadius: 25,
              borderWidth: 1,
              borderColor: "#6565658e",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>{precio}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MenuStackScreen", {
                titulo,
                descripcion,
                imagen,
                precio,
                ruta,
                suplements,
              })
            }
            style={{
              backgroundColor: "#406418",
              borderRadius: 27.5,
              width: 55,
              height: 55,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Fontisto name="shopping-basket-add" size={27} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Card;
