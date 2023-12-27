const Auth_Token = "";

export const storeToken = () => {
  localStorage.setItem("token", Auth_Token);
};

export const flush_token = () => {
  localStorage.clear();
};
