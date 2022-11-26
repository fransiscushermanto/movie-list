import { css } from "@emotion/css";
import React, { ErrorInfo } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  constructor(props: Props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }

  public render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI<div className={styled.root}>
      return (
        <div
          className={css`
            height: 100vh;
          `}
        >
          <div
            className={css`
              font-size: 30px;
              margin-bottom: 10px;
              color: grey;
            `}
          >
            <span>500 | Something went wrong</span>
          </div>
          <Link to="/">Go Home</Link>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
