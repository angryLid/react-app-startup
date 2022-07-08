import { FC, ReactNode, useEffect } from "react";

export interface PlainContainerProps {
  title: string;
  children: ReactNode;
}

export const PlainContainer: FC<PlainContainerProps> = ({
  title,
  children,
}) => {
  useEffect(() => {
    document.title = title + " | React App";
    window.getSelection()?.removeAllRanges();
  }, [title]);
  return <>{children}</>;
};
