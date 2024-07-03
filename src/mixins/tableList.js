export default {
  data() {
    return {
      page: 1,
      total: 10,
      pageSize: 10,
      tableData: [],
      query: {},
      listLoading: true
    }
  },
  methods: {
    async getTableData(page = this.page, pageSize = this.pageSize, query = this.query) {
      this.listLoading = true
      const res = await this.listApi({ pageInfo: { page, pageSize }, query })
      console.log(res)
      this.listLoading = false
      if (res.code === 'Success') {
        this.tableData = res.list
        this.total = Number(res.total)
      }
    }
  }
}
