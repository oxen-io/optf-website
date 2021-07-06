import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode,
  props?: any
}

export default function Layout({ children, ...props }: Props): ReactElement {
  return <>{children}</>;
}
