export class Meta {
  total: number = NaN;
  page: number = NaN;
  page_size: number = NaN;
  total_pages: number = NaN;
}

export class BasePaginatedResponse {
  meta: Meta;
  content: Array<object> = [];

  constructor(meta: Meta) {
    this.meta = meta;
  }
}

export default BasePaginatedResponse;
