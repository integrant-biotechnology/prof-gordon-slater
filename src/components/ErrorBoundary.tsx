import { Component, type ErrorInfo, type ReactNode } from 'react';
import { DOCTOR_NAME } from '@/constants';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Class-component error boundary. Catches render-time errors from children
 * and displays a calm fallback instead of a white screen. Hooks-based error
 * boundaries don't exist in React yet (still class-only).
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Unhandled error in route tree:', error, info.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <section
          role="alert"
          className="flex min-h-svh flex-col items-center justify-center px-6 py-32 text-center"
        >
          <p className="eyebrow text-medical-teal/80">Something went wrong</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            We hit an unexpected error.
          </h1>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-white/65">
            Sorry about that. Please reload the page — if the problem persists, head back to the
            {' '}
            home page of the {DOCTOR_NAME} personal site.
          </p>
          <a
            href="/"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-brand-bg transition-colors hover:bg-white/90"
          >
            Back to the home page
          </a>
        </section>
      );
    }
    return this.props.children;
  }
}
