import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  const { name, status, connection, interest, city, position, schoolName } =
    route?.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.status}>{status ? "Online" : "Offline"}</Text>
      {city && <Text>{`City: ${city}`}</Text>}
      {position && <Text>{`Position: ${position}`}</Text>}
      {schoolName && <Text>{`School: ${schoolName}`}</Text>}
      <Text>{`Interests: ${
        interest && interest.length > 0
          ? interest.join(", ")
          : "there are no interests"
      }`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  status: {
    fontSize: 18,
    color: "green",
    marginBottom: 8,
  },
});

export default DetailsScreen;
