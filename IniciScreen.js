import React from "react";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Card from "../Components/Menu/HomeMenuCard";

import { combList, entreList, burgList, amaniList } from "../menuList";

import { FontAwesome5 } from "@expo/vector-icons";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CommonActions } from "@react-navigation/native";
import { Linking } from "react-native";
import cantineImg from "../assets/novCantina.png";

const IniciScreen = ({ navigation }) => {
  const handlePress = () => {
    const url =
      "https://agora.xtec.cat/ies-vacarisses/general/dema-6-doctubre-obrim-la-cantina-del-centre/";
    Linking.openURL(url).catch((err) =>
      Alert.alert("Error", "An error occurred while trying to open the URL")
    );
  };
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* ---- ---- ---- Plats Combinats ---- ---- ---- */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: 330,
              // marginTop: insets.top > 25 ? 105 : 133,
              marginTop: 50.28571 - insets.top + 103,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 25,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  paddingVertical: 20,
                }}
              >
                Plats destacats
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Menú")}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    paddingVertical: 20,
                  }}
                >
                  Veure més{" "}
                  <AntDesign name="arrowright" size={16} color="#1d1b1b" />
                </Text>
              </TouchableOpacity>
            </View>
            {/* ---- ---- ---- Plats Combinats ---- ---- ---- */}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{}}
            >
              <Card
                first={true}
                titulo={combList[3].titulo}
                descripcion={combList[3].descripcion}
                precio={combList[3].precio}
                imagen={combList[3].imagen}
                suplements={combList[3].suplements}
                ruta={"IniciScreen"}
              />
              <Card
                titulo={burgList[1].titulo}
                descripcion={burgList[1].descripcion}
                precio={burgList[1].precio}
                imagen={burgList[1].imagen}
                suplements={burgList[1].suplements}
                ruta={"IniciScreen"}
              />
              <Card
                titulo={entreList[3].titulo}
                descripcion={entreList[3].descripcion}
                precio={entreList[3].precio}
                imagen={entreList[3].imagen}
                suplements={entreList[3].suplements}
                ruta={"IniciScreen"}
              />
              <Card
                titulo={amaniList[1].titulo}
                descripcion={amaniList[1].descripcion}
                precio={amaniList[1].precio}
                imagen={amaniList[1].imagen}
                suplements={amaniList[1].suplements}
                ruta={"IniciScreen"}
                last={true}
              />
            </ScrollView>
          </View>

          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 25,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  paddingBottom: 5,
                }}
              >
                Horari
              </Text>
            </View>
            <View
              style={{ marginHorizontal: 25, marginTop: 14, marginBottom: 10 }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: 190,
                  borderRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.34,
                  shadowRadius: 6.27,
                  elevation: 10,
                  padding: 15,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15, textAlign: "justify" }}>
                    Els <Text style={{ fontWeight: "bold" }}>encàrrecs</Text>{" "}
                    per al dinar s'han de fer abans o durant el segon pati.
                  </Text>
                </View>
                <View style={{ flex: 3, flexDirection: "row", marginTop: 10 }}>
                  <View style={{ flex: 1 }}>
                    <View>
                      <Text style={{ fontSize: 16 }}>Encàrrecs:</Text>
                      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        8:30 - 12:40
                      </Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: 16 }}>Obert: </Text>
                      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        8:30 - 15:30
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 14,
                    }}
                  >
                    <FontAwesome5
                      name="calendar-alt"
                      size={90}
                      color="#406418"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 25,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  paddingVertical: 10,
                }}
              >
                Novetats
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Novetats")}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    paddingVertical: 10,
                    paddingBottom: 15,
                  }}
                >
                  Veure més{" "}
                  <AntDesign name="arrowright" size={16} color="#1d1b1b" />
                </Text>
              </TouchableOpacity>
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
                  estaran sobre les taules. Obrim la cantina amb l’empresa “Te
                  quiero un huevo”.
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
                  <Text style={{ color: "white", fontSize: 16 }}>
                    Visita la Web
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default IniciScreen;
