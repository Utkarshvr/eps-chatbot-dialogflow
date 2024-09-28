import React, { useState } from "react";
import { View, TextInput, Button, Text, ScrollView } from "react-native";
import { Dialogflow_V2 } from "react-native-dialogflow"; // For Dialogflow v2 (recommended)
import dialogflowConfig from "../../eps-chatbot-service-key"; // Path to your Dialogflow JSON key

const Chatbot = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [userMessage, setUserMessage] = useState("");
  console.log({ dialogflowConfig });
  // Configure Dialogflow with the credentials
  Dialogflow_V2.setConfiguration(
    dialogflowConfig.client_email,
    dialogflowConfig.private_key || "",
    Dialogflow_V2.LANG_ENGLISH_US,
    dialogflowConfig.project_id
  );

  // Function to send a message to Dialogflow
  const sendMessageToDialogflow = (message: string) => {
    if (!message.trim()) return;

    // Add the user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
    ]);

    // Send user message to Dialogflow agent
    Dialogflow_V2.requestQuery(
      message,
      (response: any) => {
        console.log(response);
        const botReply = response.queryResult.fulfillmentText;
        console.log(botReply);
        // Add the bot's response to the chat
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botReply, isUser: false },
        ]);
      },
      (error) => {
        console.error("Dialogflow Error:", error);
      }
    );
    // Clear input field
    setUserMessage("");
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ScrollView>
        {messages.map((msg, index) => (
          <Text
            key={index}
            style={{
              marginVertical: 5,
              alignSelf: msg.isUser ? "flex-end" : "flex-start",
            }}
          >
            {msg.isUser ? `You: ${msg.text}` : `Bot: ${msg.text}`}
          </Text>
        ))}
      </ScrollView>

      <TextInput
        value={userMessage}
        onChangeText={setUserMessage}
        placeholder="Type a message"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          marginVertical: 10,
          padding: 10,
        }}
      />

      <Button
        title="Send"
        onPress={() => sendMessageToDialogflow(userMessage)}
      />
    </View>
  );
};

export default Chatbot;
