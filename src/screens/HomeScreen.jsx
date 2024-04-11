import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useQuery } from "react-query";
import UsersList from "../components/UsersList";

const fetchUserData = async () => {
  const response = await fetch(
    "https://dev.api.syncremote.co/api/v1/admin/users"
  );
  if (!response.ok) {
    throw new Error("Error to fetch data");
  }
  return response.json();
};

const HomeScreen = () => {
  const { data, isLoading, error } = useQuery("userData", fetchUserData);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <UsersList users={data} />
    </View>
  );
};

export default HomeScreen;
