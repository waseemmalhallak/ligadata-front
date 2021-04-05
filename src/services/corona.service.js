import http from "../http-common";

class CoronaDataService {
  getAll() {
    return http.get("/pagination");
  }

  
}

export default new CoronaDataService();