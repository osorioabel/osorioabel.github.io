import type { PropsWithChildren } from "react";

type WrapperProps = PropsWithChildren<{ additionalClassNames?: string }>;

export default function Wrapper({ children, additionalClassNames = "" }: WrapperProps) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.30334 8.30334">
        {children}
      </svg>
    </div>
  );
}
