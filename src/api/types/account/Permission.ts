import { DBObject } from "../common/Object";

export class Permission extends DBObject {
  account_permission_id: string = "";
  name: string = "";
  description: string = "";
}
