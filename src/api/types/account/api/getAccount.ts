import { AccountInfo } from "../Account";

export class GetAccountRequest {
  account_id: string = "";

  /**
   * toObject
   */
  public toObject() {
    return {
      account_id: this.account_id,
    };
  }

  constructor(account_id: string | undefined = undefined) {
    if (account_id) {
      this.account_id = account_id;
    }
  }
}

export class GetAccountResponse extends AccountInfo {}
