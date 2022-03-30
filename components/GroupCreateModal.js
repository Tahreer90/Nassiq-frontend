import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Center, FormControl, Input, Modal, Button } from "native-base";
import groupStore from "../stores/groupStore";
import { useNavigation } from "@react-navigation/native";
import authStore from "../stores/authStore";
import Toast from "react-native-toast-message";

const GroupCreateModal = ({
  showModal,
  setShowModal,
  modalName,
  onClose,
  scrollRef,
  xvalue,
}) => {
  const Navigation = useNavigation();
  const [groupName, setGroupName] = useState("");
  const [groupId, setGroupId] = useState("");

  if (showModal) {
    console.log(modalName);
  }
  const handleSubmit = async () => {
    if (groupName != "" || groupId != "") {
      showToast();
      modalName == "create"
        ? await groupStore.createGroup({ name: groupName }, Navigation)
        : await groupStore.joinGroup(groupId, Navigation);
      setShowModal(false);
      onClose();
      setGroupName("");
      setGroupId("");
      await groupStore.fetchGroups();
      scrollRef.current?.scrollTo({
        x: xvalue,
        animated: true,
      });
    } else {
      alert("This field can't be empty");
    }
  };

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Group created successfully",
      position: "bottom",
      bottomOffset: 400,
      visibilityTime: 1700,
    });
  };

  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px" height="170">
          <Modal.CloseButton />
          <Modal.Body>
            <FormControl>
              <FormControl.Label padding={3}>
                {modalName == "create" ? "Group Name:" : "Group ID:"}
              </FormControl.Label>
              {modalName == "create" ? (
                <Input
                  value={groupName}
                  onChangeText={(value) => setGroupName(value)}
                />
              ) : (
                <Input
                  value={groupId}
                  onChangeText={(value) => setGroupId(value)}
                />
              )}
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>

              <Button
                style={{ backgroundColor: "#FD6B68" }}
                onPress={() => {
                  // alert("Group Created Successfully");
                  handleSubmit();
                }}
              >
                {modalName == "create" ? "Create" : "Join"}
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
export default GroupCreateModal;

const styles = StyleSheet.create({
  btn: {},
});
