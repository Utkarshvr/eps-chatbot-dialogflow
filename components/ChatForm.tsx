import { useConversationAPI } from "@/context/ConversationContext";
import useBGColor from "@/hooks/useBGColor";
import { Ionicons } from "@expo/vector-icons";
import { config } from "@gluestack-ui/config";
import { Box } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { TextInput, TouchableHighlight } from "react-native";

import { Dialogflow_V2 } from "react-native-dialogflow"; // For Dialogflow v2 (recommended)
import dialogflowConfig from "../eps-chatbot-service-key"; // Path to your Dialogflow JSON key
import { ConversationType } from "@/types/types";
import { storeConversation } from "@/helpers/store-conversations";

type Props = {};

export default function ChatForm({}: Props) {
  const { isDark } = useBGColor();

  const [text, setText] = useState("");

  const { addConversation, updateConversation } = useConversationAPI();

  // Function to send a message to Dialogflow
  const sendMessageToDialogflow = (conv: ConversationType) => {
    if (!conv.queryText.trim()) return;

    // Send user message to Dialogflow agent
    Dialogflow_V2.requestQuery(
      conv.queryText,
      (response: any) => {
        console.log(response);
        const botReply = response.queryResult.fulfillmentText;
        console.log(botReply);
        // Add the bot's response to the chat
        const updatedConv = {
          ...conv,
          botResponse: botReply,
          isloading: false,
        };
        updateConversation(updatedConv);
        storeConversation(updatedConv);
      },
      (error) => {
        console.error("Dialogflow Error:", error);
      }
    );
  };

  const sendMsg = () => {
    const newConv = {
      uuid: Math.random().toString(),
      queryText: text,
      botResponse: null,
      time: new Date().toString(),
      isloading: true,
    };
    addConversation(newConv);
    setText("");
    sendMessageToDialogflow(newConv);
  };

  return (
    <Box
      width={"$full"}
      flexDirection="row"
      p="$2"
      gap={"$2"}
      alignItems="center"
    >
      <TextInput
        keyboardType="default"
        style={{
          fontSize: 16, // text-base
          color: isDark
            ? config.tokens.colors.textDark200
            : config.tokens.colors.textDark800, // text color based on theme
          maxHeight: 112, // max-h-28 (28 * 4 = 112 pixels)
          flex: 1, // flex-1
          borderColor: isDark
            ? config.tokens.colors.borderDark800
            : config.tokens.colors.borderLight300, // border based on theme
          borderWidth: 1, // border
          paddingHorizontal: 16, // px-4
          paddingVertical: 8, // py-2
          borderRadius: 12, // rounded-3xl (3xl typically maps to 24px)
        }}
        placeholderTextColor={
          isDark
            ? config.tokens.colors.textDark600
            : config.tokens.colors.textLight600
        }
        value={text}
        placeholder="Message..."
        onChangeText={(txt) => setText(txt)}
        multiline
      />
      <TouchableHighlight
        style={{
          borderRadius: 9999, // rounded-full (very high number for full rounding)
          padding: 8, // p-2 (2 * 4 = 8 pixels)
          backgroundColor:
            text.length === 0
              ? isDark
                ? config.tokens.colors.backgroundDark800
                : config.tokens.colors.backgroundDark400
              : config.tokens.colors.blue500, // background color based on text length and theme
          alignItems: "center", // items-center
          justifyContent: "center", // justify-center
        }}
        underlayColor={config.tokens.colors.blue600} // underlay color
        onPress={sendMsg}
        disabled={text.length === 0}
      >
        <Ionicons
          name="send"
          size={24}
          color={
            text.length === 0
              ? isDark
                ? config.tokens.colors.backgroundDark300
                : config.tokens.colors.backgroundDark100
              : config.tokens.colors.white
          }
        />
      </TouchableHighlight>
    </Box>
  );
}
