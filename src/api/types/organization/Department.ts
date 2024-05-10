import { DBObject } from "@/api/types/common/Object";
import {
  BasePaginatedQuery,
  BasePaginatedResponse,
} from "@/api/types/common/Pagination";

export class Department extends DBObject {
  department_id: string = "";
  name: string = "";
  description: string = "";
  faculties_count: number = 0;
}

export class DepartmentSearchRequest extends BasePaginatedQuery {
  name: string | undefined;

  constructor(
    page: number = 1,
    page_size: number = 10,
    name: string | undefined = undefined
  ) {
    super(page, page_size);
    this.name = name;
  }

  public toObject() {
    const val = super.toObject();
    return {
      ...val,
      name: this.name,
    };
  }
}

export class DepartmentSearchResponse extends BasePaginatedResponse {
  content: Array<Department> = [];
}

export class DepartmentCreateRequest {
  name: string;
  description: string | null;

  constructor(name: string, description: string | null = null) {
    this.name = name;
    this.description = description;
  }

  public toObject() {
    return {
      name: this.name,
      description: this.description,
    };
  }
}

export class DepartmentUpdateRequest extends DepartmentCreateRequest {}
