import { Link } from 'expo-router'
import { Button, Text, View } from 'tamagui'

export default function TabOneScreen() {
  return (
    <View flex={1} jc="center" ai="center">
      <Link href="/modal" asChild>
        <Button>
          <Text fontSize={20} color="$blue10">
            Hello!
          </Text>
        </Button>
      </Link>
    </View>
  )
}
