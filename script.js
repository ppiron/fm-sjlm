const data = () => {
  return {
    items: initialData,
    filters: [],
    addFilter(e, t) {
      this.filters.push({ type: t, value: e.target.innerText });
      this.filter();
    },
    removeFilter(t, v) {
      console.log(t, v);
      this.filters = this.filters.filter((filter) => {
        return filter.type !== t || filter.value !== v;
      });
      this.items = initialData;
      this.filter();
    },
    filter() {
      // this.filters.push({ type: t, value: e.target.innerText });
      for (filter of this.filters) {
        if (filter.type === "role" || filter.type === "level") {
          this.items = this.items.filter(
            (item) => item[filter.type] === filter.value
          );
        } else {
          this.items = this.items.filter((item) =>
            item[filter.type].includes(filter.value)
          );
        }
      }
    },
    clearFilters() {
      this.filters = [];
      this.items = initialData;
    },
  };
};
