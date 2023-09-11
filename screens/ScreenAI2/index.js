import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";

const SignInScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("./D3A8FCB5-AA0A-45B6-BE1D-D56A4CFCDC53 (1).png")} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#888" secureTextEntry />
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButtonContainer}>
          <Text style={styles.socialButtonText}>Login with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonContainer}>
          <Text style={styles.socialButtonText}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logoContainer: {
    marginBottom: 50
  },
  logo: {
    width: 131,
    height: 132
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  buttonContainer: {
    width: "80%",
    height: 50,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  },
  socialLoginContainer: {
    width: "80%"
  },
  socialButtonContainer: {
    height: 50,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 18
  }
});
export default SignInScreen;