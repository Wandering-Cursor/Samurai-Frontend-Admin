import { DBObject } from "../common/Object";

export class Permission extends DBObject {
  account_permission_id: string = "";
  name: string = "";
  description: string = "";
}

export class SetAccountPermissions {
  permissions: string[];

  constructor(permissions: Permission[]) {
    this.permissions = permissions.map(
      (permission) => permission.account_permission_id
    );
  }

  /**
   * toObject
   */
  public toObject() {
    return {
      permissions: this.permissions,
    };
  }
}
