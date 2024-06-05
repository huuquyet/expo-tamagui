import { Anchor, Paragraph, View, XStack } from 'tamagui'

export default function ModalScreen() {
  return (
    <View f={1} ai="center" jc="center">
      <XStack gap="$2">
        <Paragraph ta="center">Made by</Paragraph>
        <Anchor col="$blue10" href="https://twitter.com/natebirdman" target="_blank">
          @natebirdman,
        </Anchor>
        <Anchor
          col="$purple10"
          href="https://github.com/tamagui/tamagui"
          target="_blank"
          rel="noreferrer"
        >
          give it a ⭐️
        </Anchor>
      </XStack>
    </View>
  )
}
