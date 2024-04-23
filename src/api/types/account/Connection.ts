import { DBObject } from "../common/Object";

export class Connection extends DBObject {
  connection_id: string = "";
  group_id?: string;
  faculty_id?: string;
  department_id?: string;
}
