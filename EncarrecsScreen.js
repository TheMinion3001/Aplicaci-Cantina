import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import Svg, { Defs, RadialGradient, Stop, Rect } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RadialGradientBackground = ({ width, height }) => {
  return (
    <View>
      <Svg height={height} width={width}>
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
        <Rect x="0" y="0" width={width} height={height} fill="url(#grad)" />
      </Svg>
    </View>
  );
};

const EncarrecsScreen = () => {
  const route = useRoute();
  const { totalPrice, titulo, selectedSupplements, imagen } =
    route.params || {};

  const [encarrecs, setEncarrecs] = useState([]);

  useEffect(() => {
    const loadEncarrecs = async () => {
      try {
        const storedEncarrecs = await AsyncStorage.getItem("encarrecs");
        if (storedEncarrecs) {
          setEncarrecs(JSON.parse(storedEncarrecs));
        }
      } catch (error) {
        console.error("Error loading encarrecs from storage:", error);
      }
    };
    loadEncarrecs();
  }, []);

  useEffect(() => {
    if (route.params) {
      const newEncarrec = {
        id: Date.now(),
        totalPrice,
        titulo,
        selectedSupplements,
        imagen,
      };
      const exists = encarrecs.some(
        (encarrec) =>
          encarrec.totalPrice === newEncarrec.totalPrice &&
          encarrec.titulo === newEncarrec.titulo &&
          JSON.stringify(encarrec.selectedSupplements) ===
            JSON.stringify(newEncarrec.selectedSupplements) &&
          encarrec.imagen === newEncarrec.imagen
      );

      if (!exists) {
        const updatedEncarrecs = [...encarrecs, newEncarrec];
        setEncarrecs(updatedEncarrecs);
        AsyncStorage.setItem("encarrecs", JSON.stringify(updatedEncarrecs));
      }
    }
  }, [route.params]);

  const handleRemoveEncarrec = async (id) => {
    const updatedEncarrecs = encarrecs.filter((encarrec) => encarrec.id !== id);
    setEncarrecs(updatedEncarrecs);
    await AsyncStorage.setItem("encarrecs", JSON.stringify(updatedEncarrecs));
  };

  return (
    <ScrollView>
      <View style={{}}>
        <Text
          style={{
            marginHorizontal: 30,
            marginVertical: 20,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Els teus encàrrecs
        </Text>
        {encarrecs.length === 0 ? (
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <Text style={{ padding: 20, fontSize: 16 }}>
              No has realitzat cap encàrrec.
            </Text>
          </View>
        ) : (
          <View>
            {encarrecs.map((encarrec, index) => (
              <View
                key={encarrec.id}
                style={{
                  marginHorizontal: 30,
                  backgroundColor: "white",
                  borderRadius: 20,
                  marginBottom: index === encarrecs.length - 1 ? 0 : 15,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,
                  elevation: 24,
                }}
              >
                <View style={{ flexDirection: "row", width: "100%" }}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "blue",
                      overflow: "hidden",
                      justifyContent: "center",
                      borderTopLeftRadius: 20,
                      height: 150,
                    }}
                  >
                    <RadialGradientBackground width="100%" height="100%" />

                    <Image
                      source={encarrec.imagen}
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
                  <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <Text
                      style={{
                        padding: 10,
                        // fontSize: 20,
                        fontSize: encarrec.titulo.length > 14 ? 14 : 18,
                        fontWeight: "bold",
                        paddingBottom: 5,
                      }}
                    >
                      {encarrec.titulo}
                    </Text>
                    <Text
                      style={{
                        paddingHorizontal: 10,
                        fontSize: 13,
                      }}
                    >
                      {encarrec.selectedSupplements.length === 0
                        ? "No hi ha suplements seleccionats."
                        : "Suplements: " +
                          encarrec.selectedSupplements.join(", ")}
                    </Text>
                    <Text
                      style={{
                        marginTop: 8,
                        marginBottom: 8,
                        marginHorizontal: 10,
                        padding: 7,
                        backgroundColor: "#E8E8E8",
                        textAlign: "center",
                        borderRadius: 25,
                        borderWidth: 1,
                        borderColor: "#656565bb",
                        fontSize: 18,
                      }}
                    >
                      {encarrec.totalPrice.toFixed(2)}€
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#406418",
                    padding: 10,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    alignItems: "center",
                  }}
                  onPress={() => handleRemoveEncarrec(encarrec.id)}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>
                    Eliminar encàrrec
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
      <View style={{}}>
        <Text
          style={{
            marginHorizontal: 30,
            marginVertical: 20,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Tots els encàrrecs
        </Text>
        <Text
          style={{
            paddingTop: 10,
            fontSize: 16,
            alignSelf: "center",
            paddingBottom: 25,
          }}
        >
          No s'ha pogut connectar amb el servidor.
        </Text>
      </View>
    </ScrollView>
  );
};

export default EncarrecsScreen;
