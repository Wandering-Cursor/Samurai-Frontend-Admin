export class Account {
  account_id: string = "";
  email: string = "";
  username: string = "";
  first_name: string = "";
  middle_name: string | undefined;
  last_name: string = "";
  is_active: boolean = false;
  account_type: string = "";
}

export class AccountRepresentation {
  account_id: string = "";
  email: string = "";
  username: string = "";
  first_name: string = "";
  middle_name: string | undefined;
  last_name: string = "";
  is_active: boolean = false;
  account_type: string = "";
  private _account: Account;

  constructor(account: Account) {
    this.account_id = account.account_id;
    this.email = account.email;
    this.username = account.username;
    this.first_name = account.first_name;
    this.middle_name = account.middle_name;
    this.last_name = account.last_name;
    this.is_active = account.is_active;
    this.account_type =
      account.account_type.charAt(0).toUpperCase() +
      account.account_type.slice(1);
    this._account = account;
  }

  get account(): Account {
    return this._account;
  }
}
