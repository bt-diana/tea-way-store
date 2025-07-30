import type { ReactNode } from 'react';

export type FormField<T> = {
  label: string;
  name: keyof T;
  icon?: ReactNode;
  required?: boolean;
  message?: string;
  input?: <C extends React.ElementType>(
    props: React.ComponentProps<C>
  ) => React.ReactNode;
};
