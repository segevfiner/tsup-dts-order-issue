import { hello } from "..";
import os from "os";

export function helloCurrentUser() {
  return hello(os.userInfo().username);
}
