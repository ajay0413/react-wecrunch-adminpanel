import axiosinstance from '../ApiCall/axiosinstance.js';
export const RegisterUser = async (payload) => {
  try {
    const response = await axiosinstance.post("https://wecrunchbackend.vercel.app/authentication/register", payload);
    return response.data;
  } catch (err) {
    return err;
  }
};