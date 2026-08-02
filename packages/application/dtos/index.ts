// TODO: Export shared DTOs used across use cases
// DTOs define the data shapes for use case inputs and outputs

// TODO: Add shared pagination DTO
export interface PaginationInput {
  page: number;
  limit: number;
}

export interface PaginatedOutput<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// TODO: Add other shared DTOs as needed
