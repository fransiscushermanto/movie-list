import { cloneElement, FC, isValidElement, memo, useMemo } from "react";
import { cx } from "@emotion/css";

import type { SkeletonProps } from "./types";
import { circleCx, skeletonCx } from "./styles";

const Skeleton: FC<SkeletonProps> = (props) => {
  const {
    isLoading,
    children,
    className,
    shape = "normal",
    style = {},
    ...resProps
  } = props;

  const skeletonClass = useMemo(
    () => cx(className, skeletonCx, { [circleCx]: shape === "circle" }),
    [className, shape],
  );

  if (isValidElement(children)) {
    const childrenProps = children.props ?? {};
    return cloneElement(children, {
      ...resProps,
      ...(isLoading && {
        className: cx(childrenProps.className, skeletonClass),
        style: { ...(childrenProps.style ?? {}), ...style },
        onClick: undefined,
      }),
    });
  }

  if (isLoading) {
    return (
      <div className={skeletonClass} style={style} {...resProps}>
        {children}
      </div>
    );
  }

  return <>{children}</>;
};

export default memo(Skeleton);
