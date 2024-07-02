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
      this.listLoading = false
      this.tableData = res.list
      this.total = res.total
    }
  }
}
