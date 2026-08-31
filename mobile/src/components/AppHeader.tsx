import { Button, XStack } from 'tamagui';

type AppHeaderProps = {
  onCalendarPress: () => void;
};

export default function AppHeader({ onCalendarPress }: AppHeaderProps) {
  return (
    <XStack paddingHorizontal="$3" paddingVertical="$2" backgroundColor="$background">
      <Button chromeless size="$4" onPress={onCalendarPress}>
        📅
      </Button>
    </XStack>
  );
}
