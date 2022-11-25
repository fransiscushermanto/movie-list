import { LoaderFunction } from "react-router-dom";
import { queryClient } from "../../hooks/use-query/Query";
import axios from "../../utils/axios";

const loader: LoaderFunction = async ({ params }) => {
  try {
    const result = await axios.get("", {
      params: {
        i: params.imdbID,
        plot: "short",
      },
    });
    if (result.data.Response === "False") {
      throw new Response("Not Found", { status: 404 });
    }

    queryClient.setQuery(["movie", params.imdbID].toString(), {
      data: result.data,
    });
    return result;
  } catch (error) {
    throw new Response("Not Found", { status: 404 });
  }
};
export default loader;
