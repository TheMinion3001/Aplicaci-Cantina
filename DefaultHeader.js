import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

function DefaultHeader({ titulo }) {
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
        height: 120,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        justifyContent: "center", //Horitzontal
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
        elevation: 10,
      }}
    >
      <Text
        style={{
          color: "white",
          alignSelf: "center",
          marginTop: 25,
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        {titulo}
      </Text>
    </LinearGradient>
  );
}

export default DefaultHeader;
