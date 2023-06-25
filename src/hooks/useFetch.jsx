import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        data: action.data,
        loading: false,
        error: "",
      };
    case "FAILED":
      return {
        data: null,
        loading: false,
        error: action.e,
      };
    default:
      return state;
  }
};

const useFetch = (url, params, type = "GET", setLoader = "") => {
  const baseUrl = "https://www.example.com";
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    loading: true,
    error: "",
  });

  useEffect(() => {
    if (setLoader) setLoader(true);

    const parameters = {
      method: type,
    };

    if (type === "POST") {
      parameters.body = JSON.stringify(params);
    }

    fetch(baseUrl + url, parameters)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "SUCCESS", data: res });
        if (setLoader) setLoader(false);
      })
      .catch((err) => {
        dispatch({ type: "FAILED", error: err });
      });
  }, [url, params, type, setLoader]);

  return state;
};

export default useFetch;
