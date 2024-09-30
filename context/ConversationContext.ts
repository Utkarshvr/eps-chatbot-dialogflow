import { ConversationType } from "@/types/types";
import { createContext, useContext } from "react";

const initialContext: {
  conversations: ConversationType[];
  convPermission: string;
  isLoading: boolean;
} = {
  conversations: [],
  convPermission: "",
  isLoading: true,
};

export const ConversationContext = createContext(initialContext);

const initialAPIContext: {
  onStartChatPress: () => void;
  addConversation: (conv: ConversationType) => void;
  updateConversation: (conv: ConversationType) => void;
} = {
  onStartChatPress: () => {},
  addConversation: () => {},
  updateConversation: () => {},
};

export const ConversationContextAPI = createContext(initialAPIContext);

export const useConversation = () => useContext(ConversationContext);
export const useConversationAPI = () => useContext(ConversationContextAPI);
