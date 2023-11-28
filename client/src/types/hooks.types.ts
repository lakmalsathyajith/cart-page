import type { ApolloError } from '@apollo/client/errors';

export type Refetch = (categoryId: string[], locale: string) => Promise<void>;

export interface categoryQueryType {
  error: ApolloError | undefined;
  loading: boolean;
  reFetch: Refetch;
}
