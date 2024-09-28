import AsyncStorage from "@react-native-async-storage/async-storage";

interface ConversationType {}

export const storeConversation = async (conversation: ConversationType) => {
  try {
    const existingConversations = await AsyncStorage.getItem("conversations");
    let updatedConversations = existingConversations
      ? JSON.parse(existingConversations)
      : [];
    updatedConversations.push(conversation);
    await AsyncStorage.setItem(
      "conversations",
      JSON.stringify(updatedConversations)
    );
  } catch (error) {
    console.error("Error saving conversation: ", error);
  }
};

export const getConversations = async () => {
  try {
    const conversations = await AsyncStorage.getItem("conversations");
    return conversations ? JSON.parse(conversations) : [];
  } catch (error) {
    console.error("Error retrieving conversations: ", error);
  }
};

export const getConvPermission = async () => {
  try {
    const permission = await AsyncStorage.getItem("conv-permission");
    return permission;
  } catch (error) {
    console.error("Error retrieving permission: ", error);
  }
};

export const allowPermission = async () => {
  try {
    await AsyncStorage.setItem("conv-permission", "allowed");
    return "allowed";
  } catch (error) {
    console.error("Error setting permission: ", error);
  }
};
