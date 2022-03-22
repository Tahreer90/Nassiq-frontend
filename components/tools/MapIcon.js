import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Layout } from "@ui-kitten/components";

const MapIcon = () => {
  return (
    <Layout style={{ position: "absolute", right: 15 }}>
      <MaterialCommunityIcons
        name="map-marker-check"
        size={50}
        color="#FF7E7B"
      />
    </Layout>
  );
};

export default MapIcon;

const styles = StyleSheet.create({});
