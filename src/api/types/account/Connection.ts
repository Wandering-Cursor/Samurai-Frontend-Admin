import { DBObject } from "../common/Object";

export class Connection extends DBObject {
  connection_id: string = "";
  group_id?: string;
  faculty_id?: string;
  department_id?: string;
}

export class CreateConnection {
  group_id?: String;
  faculty_id?: String;
  department_id?: String;
}

export class SetAccountConnections {
  connections: string[];

  constructor(connections: string[]) {
    this.connections = connections;
  }
  /**
   * toObject
   */
  public toObject() {
    return {
      connections: this.connections,
    };
  }
}
