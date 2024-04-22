import { BasePaginatedResponse } from "@/api/types/common/paginatedResponse";
import { Account } from "@/api/types/account/Account";

export class AllAccountsResponse extends BasePaginatedResponse {
  content: Array<Account> = [];
}
