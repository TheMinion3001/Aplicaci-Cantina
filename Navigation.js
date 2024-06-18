import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

//Screens
import IniciScreen from "./Screens/IniciScreen";
import MenuScreen from "./Screens/MenuScreen";
import EncarrecsScreen from "./Screens/EncarrecsScreen";
import NovetatsScreen from "./Screens/NovetatsScreen";
import StackScreen from "./Screens/StackScreen";
import MenuStackScreen from "./Screens/MenuStack";

// import LoginScreen from "./Screens/Login";

//Icons Navegation
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Headers
import HeaderStylesInici from "./Components/Headers/IniciHeader";
import DefaultHeader from "./Components/Headers/DefaultHeader";
import { Header } from "react-native/Libraries/NewAppScreen";

const HomeStackNavigator = createNativeStackNavigator();
function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="IniciScreen">
      <HomeStackNavigator.Screen
        name="IniciScreen"
        component={IniciScreen}
        options={{
          header: () => <HeaderStylesInici />,
          headerTitle: () => null,
          headerTransparent: true,
        }}
      />
      <HomeStackNavigator.Screen
        name="Stack"
        component={StackScreen}
        options={{ title: "Configuració" }}
      />
      <HomeStackNavigator.Screen
        name="MenuStackScreen"
        component={MenuStackScreen}
        options={{ headerShown: false }}
      />
    </HomeStackNavigator.Navigator>
  );
}

const MenuStackNavigator = createNativeStackNavigator();
function MenuStack() {
  return (
    <MenuStackNavigator.Navigator initialRouteName="MenuScreen">
      <MenuStackNavigator.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          header: () => <DefaultHeader titulo={"Menú"} />,
          headerTitle: () => null,
          headerTransparent: true,
        }}
      />
      <HomeStackNavigator.Screen
        name="MenuStackScreen"
        component={MenuStackScreen}
        options={({ route }) => ({ origin: route.name, headerShown: false })}
      />
    </MenuStackNavigator.Navigator>
  );
}

function GradientBackground() {
  return (
    <LinearGradient
      colors={[
        "rgba(243,181,61,1)",
        "rgba(215,155,40,1)",
        "rgba(178,128,31,1)",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    />
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="IniciScreen"
      screenOptions={{
        tabBarBackground: () => <GradientBackground />,
        tabBarActiveTintColor: "#406418",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          height: 70,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginTop: -10,
        },
      }}
    >
      <Tab.Screen
        name="Inici"
        component={MyStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menú"
        component={MenuStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="restaurant-menu" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Encàrrecs"
        component={EncarrecsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="list-alt" size={32} color={color} />
          ),
          headerBackground: () => <DefaultHeader titulo={"Encàrrecs"} />,
          headerTitle: () => null,
          headerStatusBarHeight: 65,
        }}
      />
      <Tab.Screen
        name="Novetats"
        component={NovetatsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="newspaper-variant-multiple-outline"
              size={36}
              color={color}
            />
          ),
          headerBackground: () => <DefaultHeader titulo={"Novetats"} />,
          headerTitle: () => null,
          headerStatusBarHeight: 65,
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // // Función para actualizar el estado de inicio de sesión
  // const handleLogin = () => {
  //   // Aquí iría la lógica de autenticación (por ejemplo, verificar credenciales)
  //   setIsLoggedIn(true); // Cuando la autenticación es exitosa
  // };

  // // Renderizar la pantalla de inicio de sesión si no ha iniciado sesión
  // if (!isLoggedIn) {
  //   return <LoginScreen onLogin={handleLogin} />;
  // }

  // Renderizar la aplicación principal si está autenticado
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default Navigation;
