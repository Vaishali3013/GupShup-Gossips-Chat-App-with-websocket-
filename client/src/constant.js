const signUserInitialValues = {
  fullName: "",
  email: "",
  password: "",
};

const loginUserInitialValues = {
  email: "",
  password: "",
};

const BASE_URL = process.env.BASE_URL;
const CLIENT_ID = process.env.CLIENT_ID;

export { signUserInitialValues, loginUserInitialValues, BASE_URL, CLIENT_ID };
