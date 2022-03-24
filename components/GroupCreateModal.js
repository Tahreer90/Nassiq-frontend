import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Center, FormControl, Input, Modal, Button } from "native-base";
import groupStore from "../stores/groupStore";

const GroupCreateModal = ({ showModal, setShowModal, modalName }) => {
  const [groupName, setGroupName] = useState("");

  const handleSubmit = () => {
    modalName == "create"
      ? groupStore.createGroup({ name: groupName })
      : groupStore.joinGroup(groupName);
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
              <Input onChangeText={(value) => setGroupName(value)} />
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
                  handleSubmit();
                  setShowModal(false);
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
