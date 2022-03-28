import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Center, FormControl, Input, Modal, Button } from "native-base";
import groupStore from "../stores/groupStore";
import { useNavigation } from "@react-navigation/native";
import authStore from "../stores/authStore";

const GroupCreateModal = ({ showModal, setShowModal, modalName, onClose }) => {
  const Navigation = useNavigation();

  const [groupName, setGroupName] = useState("");
  console.log(modalName);
  const handleSubmit = () => {
    modalName == "create"
      ? groupStore.createGroup({ name: groupName }, Navigation)
      : groupStore.joinGroup(groupName, Navigation);
    setGroupName("");
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
              <Input
                value={groupName}
                onChangeText={(value) => setGroupName(value)}
              />
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
                  alert("Group Created Successfully");
                  handleSubmit();
                  setShowModal(false);
                  onClose();
                }}
              >
                Save
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
