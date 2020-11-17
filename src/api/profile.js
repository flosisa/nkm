import { getAuthInstance } from "Util/httpClient"
import {
  ACCOUNT,
} from "Constants/apiUrls"

export const account = () => getAuthInstance()
  .get(ACCOUNT)
