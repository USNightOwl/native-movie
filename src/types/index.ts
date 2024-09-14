/* eslint-disable camelcase */
export type CommonResponse<T> = {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
};
