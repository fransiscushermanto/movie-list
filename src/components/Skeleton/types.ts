import type { CSSProperties, ReactNode } from 'react';

type SkeletonShapes = 'circle' | 'normal';

// Skeleton is expected to receive any props that is assigned from antd or other lib
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SkeletonProps extends Record<string, any> {
  children?: ReactNode;
  isLoading?: boolean;
  className?: string;
  shape?: SkeletonShapes;
  style?: CSSProperties;
}
