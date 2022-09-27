export interface LoginResponsePayload {
  access_token: string,
  expires_in: number,
  refresh_expires_in: number,
  refresh_token: string,
  session_state: string
}
