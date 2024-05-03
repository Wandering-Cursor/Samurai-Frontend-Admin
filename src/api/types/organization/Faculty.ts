import { DBObject } from "@/api/types/common/Object";
import {
  BasePaginatedQuery,
  BasePaginatedResponse,
} from "@/api/types/common/Pagination";

export class Faculty extends DBObject {
  department_id: String = "";
  faculty_id: String = "";
  name: String = "";
  description: String = "";
  groups_count: Number | null = null;
}

export class FacultySearchRequest extends BasePaginatedQuery {
  department_id: String | undefined;
  name: String | undefined;

  constructor(
    page: number = 1,
    page_size: number = 10,
    filters: { department_id?: String; name?: String } = {}
  ) {
    super(page, page_size);
    this.name = filters.name;
    this.department_id = filters.department_id;
  }

  public toObject() {
    const val = super.toObject();

    if (this.department_id) {
      val.department_id = this.department_id;
    }
    if (this.name) {
      val.name = this.name;
    }

    return val;
  }
}

export class FacultySearchResponse extends BasePaginatedResponse {
  content: Array<Faculty> = [];
}

export class FacultyCreateRequest {
  department_id: string = "";
  name: string = "";
  description: string | null = null;

  public toObject() {
    return {
      department_id: this.department_id,
      name: this.name,
      description: this.description,
    };
  }
}
