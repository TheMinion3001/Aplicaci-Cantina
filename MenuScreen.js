import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  combList,
  entreList,
  burgList,
  amaniList,
  picarList,
  pastaList,
} from "../menuList";
import { ScrollView } from "react-native";
import Card from "../Components/Menu/HomeMenuCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MenuScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* ---- ---- ---- Plats Combinats ---- ---- ----  */}
          <View
            style={{
              height: 330,
              marginTop: 50.28571 - insets.top + 70,
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
                  fontWeight: "bold",
                  paddingVertical: 20,
                }}
              >
                Plats Combinats
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {combList.map((item, index) => (
                <Card
                  key={index}
                  titulo={item.titulo}
                  descripcion={item.descripcion}
                  precio={item.precio}
                  imagen={item.imagen}
                  first={index === 0}
                  last={index === combList.length - 1}
                  suplements={item.suplements}
                />
              ))}
            </ScrollView>
          </View>

          {/* ---- ---- ---- Entrepans Calents ---- ---- ----  */}
          <View
            style={{
              height: 310,
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
                  fontWeight: "bold",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                Entrepans Calents
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {entreList.map((item, index) => (
                <Card
                  key={index}
                  titulo={item.titulo}
                  descripcion={item.descripcion}
                  precio={item.precio}
                  imagen={item.imagen}
                  first={index === 0}
                  last={index === entreList.length - 1}
                  suplements={item.suplements}
                />
              ))}
            </ScrollView>
          </View>

          {/* ---- ---- ---- Hotdogmania ---- ---- ----  */}
          <View
            style={{
              height: 310,
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
                  fontWeight: "bold",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                Hotdogmania
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {burgList.map((item, index) => (
                <Card
                  key={index}
                  titulo={item.titulo}
                  descripcion={item.descripcion}
                  precio={item.precio}
                  imagen={item.imagen}
                  first={index === 0}
                  last={index === burgList.length - 1}
                  suplements={item.suplements}
                />
              ))}
            </ScrollView>
          </View>

          {/* ---- ---- ---- Amanides ---- ---- ----  */}
          <View
            style={{
              height: 310,
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
                  fontWeight: "bold",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                Amanides
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {amaniList.map((item, index) => (
                <Card
                  key={index}
                  titulo={item.titulo}
                  descripcion={item.descripcion}
                  precio={item.precio}
                  imagen={item.imagen}
                  first={index === 0}
                  last={index === amaniList.length - 1}
                  suplements={item.suplements}
                />
              ))}
            </ScrollView>
          </View>

          {/* ---- ---- ---- Per Picar ---- ---- ----  */}
          <View
            style={{
              height: 310,
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
                  fontWeight: "bold",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                Per Picar
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {picarList.map((item, index) => (
                <Card
                  key={index}
                  titulo={item.titulo}
                  descripcion={item.descripcion}
                  precio={item.precio}
                  imagen={item.imagen}
                  first={index === 0}
                  last={index === picarList.length - 1}
                  suplements={item.suplements}
                />
              ))}
            </ScrollView>
          </View>

          {/* ---- ---- ---- Pasta ---- ---- ----  */}
          <View
            style={{
              height: 310,
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
                  fontWeight: "bold",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                Pasta
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {pastaList.map((item, index) => (
                <Card
                  key={index}
                  titulo={item.titulo}
                  descripcion={item.descripcion}
                  precio={item.precio}
                  imagen={item.imagen}
                  first={index === 0}
                  last={index === pastaList.length - 1}
                  suplements={item.suplements}
                />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MenuScreen;
