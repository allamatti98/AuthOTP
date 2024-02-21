import React, { usestate } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firestore from "@react-native-firebase/firestore";

export default function Detail({ route, navigation }) {
  const { uid } = route.params;
  const [name, setName] = usestate("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = usestate("");

  const saveDetails = async () => {
    try {
      await firestore().collection("users").doc(uid).set({
        name,
        dob,
        gender,

      });
      navigation.navigate("Dashboard");
    } catch (error) {
      console. log("Error saving details: ", error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#BEBDB8" }}>
      <Text
      style={{
        fontSize: 32,
        fontweight: "bold",
        marginBottom: 40,
        marginTop: 150,
      }}
      >
        Enter your details:
      </Text>
      <TextInput
        style={{
          height: 50,
          width: "100%",
          borderColor: "black",
          borderWidth: 1,
          marginBottom: 30,
          paddingHorizontal: 10,
        }}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        />
        <TextInput
        style={{
          height: 50,
          width: "100%",
          bordercolor: "black",
          borderWidth: 1,
          marginBottom: 30,
          paddingHorizontal: 10,
        }}
        placeholder="Date of Birth"
        value={dob}
        onchangeText={setDob}
        />
        <TextInput
        style={{
          height: 50,
          width: "100%",
          borderColor: "black",
          borderWidth: 1,
          marginBottom: 30,
          paddingHorizontal: 10,
        }}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
        />
        <Touchable0pacity
          onPress={saveDetails}
          style={{
            backgroundColor: "#841584",
            padding: 10,
            borderRadius: 5,
            marginBottom: 20,
            alignItems: "center",
          }}
          >
            <Text style={{ color: "white", fontsize: 22, fontweight: "bold"}}>
            Save Details
            </Text>
          </Touchable0pacity>
    </View>
  );
        }