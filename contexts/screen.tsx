import { useScreenSize } from '@/hooks/screen';
import { ReactElement, ReactNode, createContext, useContext } from 'react';

interface Screen {
  width: number;
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isHuge: boolean;
  isEnormous: boolean;
}

const ScreenContext = createContext<Screen>({
  width: 0,
  isSmall: true,
  isMedium: false,
  isLarge: false,
  isHuge: false,
  isEnormous: false,
});

export function useScreen() {
  return useContext(ScreenContext);
}

interface Props {
  children: ReactNode;
}
export function ScreenProvider(props: Props): ReactElement {
  const { children } = props;

  const value: Screen = useScreenSize();

  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
}
