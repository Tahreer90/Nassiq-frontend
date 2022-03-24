import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Actionsheet, Box, HStack } from "native-base";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import GroupCreateModal from "../GroupCreateModal";

function NQAction({ isOpen, onClose }) {
  const [showModal, setShowModal] = useState(false);

  const Navigation = useNavigation();
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <Actionsheet.Item onPress={() => Navigation.navigate("AddTask")}>
          <HStack style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="plus" size={24} color="#FD6B68" />
            <Text style={{ marginLeft: 7 }}>Add Task</Text>
          </HStack>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={() => setShowModal(true)}>
          <HStack style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="group" size={24} color="#FD6B68" />
            <Text style={{ marginLeft: 7 }}>Create a Group</Text>
          </HStack>
        </Actionsheet.Item>
        <GroupCreateModal
          showModal={showModal}
          setShowModal={setShowModal}
          modalName="create"
        />
        <Actionsheet.Item onPress={() => setShowModal(true)}>
          <HStack style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="group-add" size={24} color="#FD6B68" />
            <Text style={{ marginLeft: 7 }}>Join a Group</Text>
          </HStack>
          <GroupCreateModal showModal={showModal} setShowModal={setShowModal} />
        </Actionsheet.Item>
        <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
}

export default NQAction;

const styles = StyleSheet.create({});
