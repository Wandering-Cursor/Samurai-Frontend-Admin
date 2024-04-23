import { DBObject } from "../common/Object";

export class RegistrationEmailCode extends DBObject {
  account_id: string = "";
  code: string = "";
  is_used: boolean = false;
}
