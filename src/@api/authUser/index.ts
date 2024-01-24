import axios from "axios";

export class AuthApi {
  async signinAPi() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async signupAPi() {
    try {
      const { data } = await axios.get("");
      return data;
    } catch (error) {
      throw error;
    }
  }
}
