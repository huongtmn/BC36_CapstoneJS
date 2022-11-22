function ProductsService(id) {
    this.getList = function () {
      return axios({
        url: "https://63661fbc046eddf1baf95efc.mockapi.io/Products",
        method: "GET",
      });
    };
  }
  