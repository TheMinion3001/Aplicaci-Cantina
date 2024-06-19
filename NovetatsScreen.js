import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Linking } from "react-native";
import cantineImg from "../assets/novCantina.png";
import menuImg from "../assets/novMenu.png";

const NovetatsScreen = () => {
  const handlePress = () => {
    const url =
      "https://agora.xtec.cat/ies-vacarisses/general/dema-6-doctubre-obrim-la-cantina-del-centre/";
    Linking.openURL(url).catch((err) =>
      Alert.alert("Error", "An error occurred while trying to open the URL")
    );
  };

  const handlePress2 = () => {
    const url =
      "https://agora.xtec.cat/ies-vacarisses/general/servei-de-cantina/";
    Linking.openURL(url).catch((err) =>
      Alert.alert("Error", "An error occurred while trying to open the URL")
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flexDirection: "row",
          height: 280,
          backgroundColor: "white",
          margin: 25,
          borderRadius: 25,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={cantineImg}
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25,
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              flex: 1.5,
              paddingTop: 10,
              paddingHorizontal: 10,
              fontSize: 20,
              fontWeight: "bold",
              // backgroundColor: "blue",
            }}
          >
            Obrim la Cantina!
          </Text>
          <Text
            style={{
              flex: 4,
              paddingTop: 0,
              padding: 10,
              textAlign: "justify",
            }}
          >
            A partir de demà, 6 d’octubre de 2022, aquestes cadires ja no
            estaran sobre les taules. Obrim la cantina amb l’empresa “Te quiero
            un huevo”.
          </Text>
          <TouchableOpacity
            style={{
              flex: 1,
              borderRadius: 20,
              backgroundColor: "#406418",
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
            }}
            onPress={handlePress}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Visita la Web</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          height: 280,
          backgroundColor: "white",
          margin: 25,
          marginTop: 10,
          borderRadius: 25,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={menuImg}
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25,
              resizeMode: "cover",
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              flex: 1.5,
              paddingTop: 10,
              paddingHorizontal: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Menu Cantina!
          </Text>
          <Text
            style={{
              flex: 4,
              paddingTop: 0,
              padding: 10,
              textAlign: "justify",
            }}
          >
            Ja pots consultar el nostre menú en la nostra pàgina web!
          </Text>
          <TouchableOpacity
            style={{
              flex: 1,
              borderRadius: 20,
              backgroundColor: "#406418",
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
            }}
            onPress={handlePress2}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Visita la Web</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default NovetatsScreen;
