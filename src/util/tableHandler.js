import { prop, propOr, map, has, find, propEq } from 'ramda'
import dayjs from 'dayjs'
import findItem from './findItem'

const tableHandler = (data, columns) => {
  let columnsLen = {}

  const filteredData = map(item => {
    let obj = {}

    map(({ field, type }) => {
      let value
      const fieldData = propOr('', field, item)

      if (typeof fieldData === 'number') {
        if (type === 'date' && fieldData) {
          value = dayjs(fieldData).format('DD.MM.YYYY')
        } else if (type === 'fullDate' && fieldData) {
          value = dayjs(fieldData).format('DD.MM.YYYY hh:mm')
        } else {
          value = fieldData.toString()
        }
      } else {
        value = fieldData.toString()
      }

      const len = value.length
      obj = { ...obj, [field]: value }

      const maxLen = Math.max(len, findItem('field', field, 'header', columns).length)
      if (columnsLen.has(field)) {
        if (columnsLen[field] < maxLen) {
          columnsLen[field] = maxLen
        }
      } else {
        columnsLen[field] = maxLen
      }
    })(columns)

    return obj
  })(data)

  const arrSum = values => values.reduce((a, b) => a + b, 0)
  const maxColumnsLength = arrSum(Object.values(columnsLen))
  const columnsWidth = map(item => item * 100 / maxColumnsLength)(Object.values(columnsLen))

  return { filteredData, columnsWidth }
}

export default tableHandler
