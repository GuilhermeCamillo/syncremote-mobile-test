import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const UsersList = ({ users }) => {
  const navigation = useNavigation();
  const renderItem = useCallback(({ item }) => {
    return (
      item.name && (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Details", item )}
        >
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.status}>
            {item.status ? "Online" : "Offline"}
          </Text>
          <View style={styles.details}>
            {item.city && <Text>{`City: ${item.city}`}</Text>}
            {item.position && <Text>{`Position: ${item.position}`}</Text>}
            {item.schoolName && <Text>{`School: ${item.schoolName}`}</Text>}
            {item.interest.length > 0 && (
              <Text>{`Interests: ${item.interest.join(", ")}`}</Text>
            )}
          </View>
        </TouchableOpacity>
      )
    );
  }, []);

  return (
    <FlatList
      data={users.users}
      renderItem={renderItem}
      removeClippedSubviews={true}
      maxToRenderPerBatch={5}
      initialNumToRender={10}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  details: {
    marginTop: 8,
  },
});

export default UsersList;
