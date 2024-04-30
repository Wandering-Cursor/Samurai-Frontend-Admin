import { DBObject } from "@/api/types/common/Object";
import {
  BasePaginatedQuery,
  BasePaginatedResponse,
} from "@/api/types/common/paginatedResponse";

export default class Faculty extends DBObject {
  department_id: String = "";
  faculty_id: String = "";
  name: String = "";
  description: String = "";
}

export class FacultySearchRequest extends BasePaginatedQuery {
  department_id: String | undefined;
  name: String | undefined;

  constructor(
    page: number = 1,
    page_size: number = 10,
    department_id: String = "",
    name: String | undefined = undefined
  ) {
    super(page, page_size);
    this.name = name;
    this.department_id = department_id;
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
