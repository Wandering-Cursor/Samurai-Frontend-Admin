import { Connection } from "../Connection";
import { Permission } from "../Permission";

export class AccountTypeOption {
  name: string = "Student";
  value: string = "student";
}

const accountTypeOptions: AccountTypeOption[] = [
  { name: "Student", value: "student" },
  { name: "Teacher", value: "teacher" },
  { name: "Admin", value: "admin" },
  { name: "Overseer", value: "overseer" },
];

export class CreateAccountRequest {
  first_name: string;
  last_name: string;
  account_type: AccountTypeOption = accountTypeOptions[0];

  middle_name: string | undefined;
  registration_code: string | undefined;

  permissions: Permission[];
  connections: Connection[];

  constructor(
    first_name: string = "",
    last_name: string = "",
    permissions: Permission[] = [],
    connections: Connection[] = [],
    middle_name: string | undefined = undefined,
    registration_code: string | undefined = undefined
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.middle_name = middle_name;
    this.registration_code = registration_code;
    this.permissions = permissions;
    this.connections = connections;
  }

  /**
   * toObject
   */
  public toObject() {
    let data: { [key: string]: any } = {
      first_name: this.first_name || null,
      last_name: this.last_name || null,
      middle_name: this.middle_name || null,
      permissions: this.permissions.map(
        (permission) => permission.account_permission_id
      ),
      connections: this.connections.map(
        (connection) => connection.connection_id
      ),
      account_type: this.account_type.value,
    };
    if (this.registration_code) {
      data.registration_code = this.registration_code;
    }
    return data;
  }
}
