import { ReactNode, Suspense, memo } from "react";

import LazyLoad from "./LazyLoad";

const CommonSuspense = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<LazyLoad />}>{children}</Suspense>;
};

export default memo(CommonSuspense);
