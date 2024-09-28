import {
  allowPermission,
  getConversations,
  getConvPermission,
} from "@/helpers/store-conversations";
import useBGColor from "@/hooks/useBGColor";
import { Box, Center, Text } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import InitializeChatCard from "./InitializeChatCard";
import { ActivityIndicator, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {};

const screenDimensions = Dimensions.get("window");

export default function ChatConversations({}: Props) {
  const { bgColor } = useBGColor();

  const [conversations, setConversations] = useState([]);
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

  if (isLoading)
    return (
      <Box
        flex={1}
        p="$2"
        bgColor={bgColor}
        alignItems="center"
        justifyContent="center"
      >
        <ActivityIndicator size={"large"} color={"#3b82f6"} />
      </Box>
    );

  if (convPermission !== "allowed")
    return (
      <Center
        position="absolute"
        top={0}
        left={0}
        zIndex={999999999999999}
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          width: screenDimensions.width,
          height: screenDimensions.height,
        }}
      >
        <InitializeChatCard onStartChatPress={onStartChatPress} />
      </Center>
    );

  return (
    <Box bgColor={bgColor} flex={1}>
      <Text>hello</Text>
    </Box>
  );
}
