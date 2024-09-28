import useBGColor from "@/hooks/useBGColor";
import {
  Box,
  Button,
  ButtonText,
  Card,
  Image,
  Text,
} from "@gluestack-ui/themed";

type Props = {};

export default function InitializeChatCard({}: Props) {
  const { borderColor } = useBGColor();
  return (
    <Card
      p="$4"
      borderRadius="$lg"
      maxWidth={360}
      m="$3"
      alignItems="center"
      justifyContent="center"
      gap={"$4"}
      position="relative"
      pt={"$12"}
    >
      <Box
        alignItems="center"
        justifyContent="center"
        bgColor="$white"
        borderWidth="$4"
        p="$1"
        borderRadius={999}
        position="absolute"
        style={{
          top: "-15%",
          left: "50%",
          transform: "translate(-5px, 0)",
          borderColor: borderColor,
        }}
      >
        <Image
          source={require("@/assets/icons/chatbot.png")}
          width={36}
          height={36}
          alt="Icon"
        />
      </Box>
      <Text size="sm" textAlign="center">
        Hello Nice to see you here! By pressing the "Start chat" button you
        agree to have your personal data processed as described in our Privacy
        Policy
      </Text>
      <Button py="$2" px="$4">
        <ButtonText size="sm">Start Chat</ButtonText>
      </Button>
    </Card>
  );
}
