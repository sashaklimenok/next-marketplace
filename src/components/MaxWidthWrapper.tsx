import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

interface MaxWidthWrapperProps {
  className?: string;
}

const MaxWidthWrapper: FC<PropsWithChildren<MaxWidthWrapperProps>> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
