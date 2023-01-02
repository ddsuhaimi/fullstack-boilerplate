import axios from "axios";
interface postData {
  title: string;
  text: string;
}
export const createOne = async (data: postData): Promise<any> => {
  try {
    const result = await axios.post("posts", data);
    console.log("result", result);
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error?.response?.data;
    }
  }
};
export const deletePost = async (postId: string): Promise<any> => {
  if (!postId) return;
  try {
    const result = await axios.delete(`posts/${postId}`);
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error?.response?.data;
    }
  }
};
