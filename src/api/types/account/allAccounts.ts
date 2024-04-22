import {
  BasePaginatedQuery,
  BasePaginatedResponse,
} from "@/api/types/common/paginatedResponse";
import { Account } from "@/api/types/account/Account";

export class AllAccountsQuery extends BasePaginatedQuery {
  account_id: string | undefined;
  email: string | undefined;
  username: string | undefined;
  account_type: string | undefined;
  registration_code: string | undefined;

  /**
   * toObject
   */
  public toObject() {
    let val = super.toObject();
    return {
      ...val,
      account_id: this.account_id,
      email: this.email,
      username: this.username,
      account_type: this.account_type,
      registration_code: this.registration_code,
    };
  }

  constructor(page: number, size: number, object: { [key: string]: any } = {}) {
    super(page, size);
    this.account_id = object["account_id"] || undefined;
    this.email = object["email"] || undefined;
    this.username = object["username"] || undefined;
    this.account_type = object["account_type"] || undefined;
    this.registration_code = object["registration_code"] || undefined;
  }
}

export class AllAccountsResponse extends BasePaginatedResponse {
  content: Array<Account> = [];
}
