export default [
  // Фискал модуллар
  {
    id: 1,
    columns: [
      { header: "Серия рақами", field: "number", minWidth: 180, width: 180, },
      { header: "Апплет версияси", field: "version", minWidth: 140, width: 140, },
      { header: "ТХКМ", field: "txkm", minWidth: 400, width: 400, },
      { header: "ТХКМ тури", field: "txkmType", minWidth: 160, width: 160, },
      { header: "СТИР", field: "tin", minWidth: 134, width: 134, },
      { header: "Подключенный субъект", field: "subject", minWidth: 400, width: 400, },
      { header: "Серия рақами", field: "number", minWidth: 180, width: 180, },
      { header: "Апплет версияси", field: "version", minWidth: 140, width: 140, },
      { header: "ТХКМ", field: "txkm", minWidth: 400, width: 400, },
    ]
  },
]

export const dummyData = {
  number: 'UZ190515000859',
  version: '0302',
  txkm: 'ООО "SMART ONE CLUB"',
  txkmType: 'Асосий',
  tin: '301301301',
  subject: '"САВДО" МЧЖ'
}
