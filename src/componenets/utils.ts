const Auth_Token = "token";

export const store_Token = (token: string) => {
  localStorage.setItem(Auth_Token, token);
};

export const get_Token = () => {
  const token = localStorage.getItem(Auth_Token);
  return token;
};
export const flush_token = () => {
  localStorage.clear();
};
