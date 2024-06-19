import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";

function LoginScreen({ onLogin }) {
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "989410648733-i4koiauo97ib9qtkn5n90ms7sm4859rj.apps.googleusercontent.com",
    });
  }, []);

  const signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setUserInfo(user);
      setError();
      const name = user.user.givenName;
      const fullName = user.user.name;
      const image = user.user.photo;
      const secName = user.user.familyName;
      const email = user.user.email;
      onLogin(name, fullName, image, secName, email);
      console.log(user.user);
    } catch (e) {
      setError(e);
    }
  };

  const logout = () => {
    setUserInfo();
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(error)}</Text>
      {userInfo && <Text>{JSON.stringify(userInfo.user.name)}</Text>}
      {userInfo ? (
        <View>
          <Text>Hola</Text>
          <Button title="Logout" onPress={logout} />
        </View>
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 28, margin: 20, marginBottom: 20 }}>
            Inicia Sessió
          </Text>

          <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signin}
          />
          <Text
            style={{
              fontSize: 16,
              margin: 20,
              marginBottom: 5,
              marginTop: 10,
            }}
          >
            És obligatori iniciar sessió amb el compte de Google de l'institut.
          </Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
