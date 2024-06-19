import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function HeaderStylesInici({ name, image }) {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={[
        "rgba(243,181,61,1)",
        "rgba(215,155,40,1)",
        "rgba(178,128,31,1)",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        height: 155,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        justifyContent: "space-between", //Horitzontal
        alignItems: "center", //Vertical
        flexDirection: "row",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 15,
      }}
    >
      <View style={{ paddingTop: 20 }}>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 25,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {name}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#406418",
              borderRadius: 14,
              width: 145,
              height: 34,
              flexDirection: "row-reverse",
              justifyContent: "space-around",
              alignItems: "center",
              paddingHorizontal: 5,
            }}
            onPress={() => navigation.navigate("Stack")}
          >
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>
              Configuració
            </Text>
            <Feather name="settings" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingTop: 25, marginRight: 20 }}>
        <Image
          source={{ uri: image }}
          style={{ height: 80, width: 80, borderRadius: 40 }}
        />
      </View>
    </LinearGradient>
  );
}

export default HeaderStylesInici;
