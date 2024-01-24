import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseAPi } from "../baseAPi";

class homeApi extends baseAPi {
  async homeApi() {
    try {
      const { data } = await this.axios.get("posts");
      return data;
    } catch (error) {
      return error;
    }
  }

  fetchUserById = createAsyncThunk("fetchUserById", async () => {
    const { data } = await this.axios(`posts`);
    return data;
  });
}

export { homeApi };
