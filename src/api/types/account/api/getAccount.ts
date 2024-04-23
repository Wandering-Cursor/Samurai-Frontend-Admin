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
}

export class GetAccountResponse extends AccountInfo {}
