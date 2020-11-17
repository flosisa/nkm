import { prop, pipe, find, propEq } from "ramda"

export default (findProp, findItem, getProp, items) => pipe(
  find(propEq(findProp, findItem)),
  prop(getProp)
)(items)
