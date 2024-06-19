import React from "react";
import {
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Svg, { Defs, RadialGradient, Stop, Rect } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";

import SupplementItem from "../Components/Menu/SupplementItem";

const RadialGradientBackground = ({ height }) => {
  return (
    <Svg
      height={height * 0.42}
      width="100%"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
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
      <Rect x="0" y="0" width="100%" height={height * 0.39} fill="url(#grad)" />
    </Svg>
  );
};

const MenuStackScreen = () => {
  const route = useRoute();
  const { titulo, descripcion, imagen, precio, ruta, suplements } =
    route.params;
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const cleanBasePrice = parseFloat(precio.replace(/[^\d.-]/g, ""));
  const [totalPrice, setTotalPrice] = useState(cleanBasePrice);
  const [selectedSupplements, setSelectedSupplements] = useState([]);

  const handleIncrement = (supplementPrice, name) => {
    const priceToAdd = parseFloat(supplementPrice.replace(/[^\d.-]/g, ""));
    setTotalPrice(totalPrice + priceToAdd);
    setSelectedSupplements([...selectedSupplements, name]);
  };

  const handleDecrement = (supplementPrice, name) => {
    const priceToSubtract = parseFloat(supplementPrice.replace(/[^\d.-]/g, ""));
    setTotalPrice(totalPrice - priceToSubtract);
    setSelectedSupplements(selectedSupplements.filter((item) => item !== name));
  };

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.8,
            overflow: "hidden",
            borderBottomLeftRadius: 45,
            borderBottomRightRadius: 45,
            paddingTop: 25,
          }}
        >
          <RadialGradientBackground height={height} />
          <TouchableOpacity
            style={{
              flex: 1.5,
              width: 130,
              flexDirection: "row",
              alignItems: "center",
              // backgroundColor: "blue",
            }}
            // onPress={() => {
            //   if (ruta === "IniciScreen") {
            //     navigation.navigate("IniciScreen");
            //   } else {
            //     navigation.navigate("MenuScreen");
            //   }
            // }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="chevron-back-circle"
              size={40}
              color="white"
              style={{ marginLeft: 10 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "400",
                marginLeft: 5,
              }}
            >
              {ruta === "IniciScreen" ? "Inici" : "Menú"}
            </Text>
          </TouchableOpacity>
          <Image
            source={imagen}
            style={{
              flex: 4,
              width: "60%",
              height: "60%",
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              flex: 1,
              color: "white",
              fontSize: 30,
              alignSelf: "center",
              marginTop: "5%",
              fontWeight: "bold",
              paddingBottom: 20,
            }}
          >
            {titulo}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              paddingVertical: 15,
              paddingHorizontal: 20,
              // backgroundColor: "red",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "300", textAlign: "justify" }}
            >
              {descripcion}
            </Text>
          </View>
          <View style={{ flex: 4, paddingHorizontal: 20 }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 10 }}
            >
              Personalitza
            </Text>
            <ScrollView>
              {suplements.length === 0 ? (
                <Text>Aquest producte no es pot personalitzar</Text>
              ) : (
                suplements.map((item, index) => (
                  <SupplementItem
                    key={index}
                    name={item.nom}
                    price={item.preu}
                    onIncrement={() => handleIncrement(item.preu, item.nom)}
                    onDecrement={() => handleDecrement(item.preu, item.nom)}
                  />
                ))
              )}
            </ScrollView>
          </View>
        </View>
        <View style={{ flex: 0.3 }}>
          <View
            style={{
              flexDirection: "row",
              padding: 15,
              height: "100%",
              alignItems: "center",
            }}
          >
            <View
              style={{
                padding: 10,
                backgroundColor: "#E8E8E8",
                flex: 1,
                height: 70,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#656565bd",
                borderWidth: 1,
              }}
            >
              <Text style={{ fontSize: 30 }}>{totalPrice.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#406418",
                height: 70,
                flex: 1.7,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
              }}
              onPress={() =>
                navigation.navigate("Encàrrecs", {
                  totalPrice,
                  titulo,
                  selectedSupplements,
                  imagen,
                })
              }
            >
              <Text
                style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
              >
                Encarregar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default MenuStackScreen;
