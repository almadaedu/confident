import { useMemo } from 'react';
import { Image as RNImage } from 'react-native';
import { MotiView } from 'moti';
import { Image } from 'tamagui';

import buddySprite from '../assets/buddy-128.png';

const MASCOT_MIN_SIZE = 130;
const FALLBACK_SIZE = 400;

const buddySrc = RNImage.resolveAssetSource(buddySprite).uri;

type MascotePixelProps = {
  size?: number;
  maxWidth?: number;
  maxHeight?: number;
};

export default function MascotePixel({ size: sizeProp, maxWidth, maxHeight }: MascotePixelProps) {
  const size = useMemo(() => {
    if (sizeProp !== undefined) {
      return sizeProp;
    }
    const candidates = [FALLBACK_SIZE];
    if (maxWidth !== undefined) {
      candidates.push(maxWidth);
    }
    if (maxHeight !== undefined) {
      candidates.push(maxHeight);
    }
    return Math.max(MASCOT_MIN_SIZE, Math.min(...candidates));
  }, [sizeProp, maxWidth, maxHeight]);

  return (
      <Image src={buddySrc} width={size} height={size} />
  );
}
