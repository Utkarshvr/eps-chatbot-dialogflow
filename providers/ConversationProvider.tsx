import {
  ConversationContext,
  ConversationContextAPI,
} from "@/context/ConversationContext";
import {
  allowPermission,
  getConversations,
  getConvPermission,
} from "@/helpers/store-conversations";
import { ConversationType } from "@/types/types";
import { ReactNode, useEffect, useState } from "react";

type Props = { children: ReactNode };

export default function ConversationProvider({ children }: Props) {
  const [conversations, setConversations] = useState<ConversationType[]>([]);
  const [convPermission, setConvPermission] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getConversations()
      .then((conv) => {
        setConversations(conv);
      })
      .catch((err) => {
        console.log(err);
      });

    getConvPermission()
      .then((conv) => {
        setConvPermission(conv || "");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onStartChatPress = () => {
    allowPermission();
    setConvPermission("allowed");
  };

  const addConversation = (conv: ConversationType) => {
    setConversations((prev) => [...prev, conv]);
  };

  const updateConversation = (conv: ConversationType) => {
    setConversations((prev) =>
      prev.map((cv) => {
        if (cv.uuid === conv.uuid) return conv;
        else return cv;
      })
    );
  };

  return (
    <ConversationContext.Provider
      value={{ conversations, convPermission, isLoading }}
    >
      <ConversationContextAPI.Provider
        value={{ onStartChatPress, addConversation, updateConversation }}
      >
        {children}
      </ConversationContextAPI.Provider>
    </ConversationContext.Provider>
  );
}
