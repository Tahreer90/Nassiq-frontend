import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Actionsheet, Box, HStack } from "native-base";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import GroupCreateModal from "../GroupCreateModal";
import { ThemeContext } from "../navigation/theme-context";

function NQAction({ isOpen, onClose, groupId, scrollRef, xvalue, pagevalue }) {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const themeColor =
    ThemeContext._currentValue.theme == "light" ? "white" : "#1a2138";
  const themeColor2 =
    ThemeContext._currentValue.theme == "light" ? "#1a2138" : "white";
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content style={{ backgroundColor: themeColor }}>
          <Actionsheet.Item
            onPress={() =>
              Navigation.navigate("AddTask", {
                groupId: groupId,
                pagevalue,
                scrollRef,
                onClose: onClose,
              })
            }
          >
            <HStack style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="plus" size={24} color="#FD6B68" />
              <Text style={{ marginLeft: 7, color: themeColor2 }}>
                Add Task
              </Text>
            </HStack>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => setShowModal(true)}>
            <HStack style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="group" size={24} color="#FD6B68" />
              <Text style={{ marginLeft: 7, color: themeColor2 }}>
                Create a Group
              </Text>
            </HStack>
          </Actionsheet.Item>
          <GroupCreateModal
            showModal={showModal}
            setShowModal={setShowModal}
            modalName="create"
            onClose={onClose}
            scrollRef={scrollRef}
            xvalue={xvalue}
          />
          <Actionsheet.Item onPress={() => setShowModal1(true)}>
            <HStack style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="group-add" size={24} color="#FD6B68" />
              <Text style={{ marginLeft: 7, color: themeColor2 }}>
                Join a Group
              </Text>
            </HStack>
            <GroupCreateModal
              showModal={showModal1}
              setShowModal={setShowModal1}
              modalName="join"
              onClose={onClose}
              scrollRef={scrollRef}
              xvalue={xvalue}
            />
          </Actionsheet.Item>
          <Actionsheet.Item style={{ color: themeColor2 }} onPress={onClose}>
            Cancel
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </SafeAreaView>
  );
}

export default NQAction;

const styles = StyleSheet.create({});
