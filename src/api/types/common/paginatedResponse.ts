export class Meta {
  total: number = NaN;
  page: number = NaN;
  page_size: number = NaN;
  total_pages: number = NaN;
}

export class BasePaginatedQuery {
  page: number = 1;
  page_size: number = 10;

  constructor(page: number, page_size: number) {
    this.page = page;
    this.page_size = page_size;
  }

  /**
   * toObject
   */
  public toObject() {
    return {
      page: this.page,
      page_size: this.page_size,
    };
  }
}

export class BasePaginatedResponse {
  meta: Meta;
  content: Array<object> = [];

  constructor(meta: Meta) {
    this.meta = meta;
  }
}

export default BasePaginatedResponse;