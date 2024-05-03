import { DBObject } from "@/api/types/common/Object";
import {
  BasePaginatedQuery,
  BasePaginatedResponse,
} from "@/api/types/common/Pagination";

export default class Group extends DBObject {
  faculty_id: String = "";
  group_id: String = "";
  name: String = "";
  description: String = "";
}

export class SearchGroupsQuery extends BasePaginatedQuery {
  faculty_id: String | undefined;
  name: String | undefined;

  constructor(
    page: number = 1,
    page_size: number = 10,
    faculty_id: String = "",
    name: String | undefined = undefined
  ) {
    super(page, page_size);
    this.name = name;
    this.faculty_id = faculty_id;
  }

  public toObject() {
    const val = super.toObject();

    if (this.faculty_id) {
      val.faculty_id = this.faculty_id;
    }
    if (this.name) {
      val.name = this.name;
    }

    return val;
  }
}

export class SearchGroupsResponse extends BasePaginatedResponse {
  content: Array<Group> = [];
}
