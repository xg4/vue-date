export default {
  beforeMount() {
    this.init()
  },
  methods: {
    init() {
      let current = new Date()
      this.year = current.getFullYear()
      this.month = current.getMonth()
    }
  },
  data() {
    return {
      year: '',
      month: '',
      title: ['日', '一', '二', '三', '四', '五', '六']
    }
  },
  watch: {
    month(newVal) {
      if (newVal >= 12) {
        this.year++
        this.month = 0
      }
      if (newVal < 0) {
        this.year--
        this.month = 11
      }
    }
  },
  computed: {
    date() {
      let date = []
      let temp = []
      let prevDays = getDateInMonth(this.year, this.month - 1)
      let days = getDateInMonth(this.year, this.month)
      let week = getWeek(this.year, this.month)
      for (let i = week - 1; i >= 0; i--) {
        temp.push(prevDays - i)
      }
      for (let j = 1; j <= days; j++) {
        if (temp.length >= 7) {
          date.push(temp)
          temp = []
        }
        temp.push(j)
      }
      let index = 1
      while (temp.length < 7) {
        temp.push(index++)
      }
      date.push(temp)
      temp = []
      return date
    }
  }
}

const getDateInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate()
}

const getWeek = (year, month) => {
  return new Date(year, month, 1).getDay()
}
