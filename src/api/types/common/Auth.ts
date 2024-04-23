import { JwtPayload } from "jwt-decode";

export class ExtendedAuthToken implements JwtPayload {
  iss?: string;
  sub?: string;
  aud?: string[] | string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  scopes?: string[];
}
