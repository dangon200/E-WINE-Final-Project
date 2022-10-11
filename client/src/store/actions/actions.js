export const REGISTER_USER = "REGISTER USER";

export function registerUser(data) {
  return function (dispatch) {
    fetch("http://localhost:3001/users/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: REGISTER_USER, payload: data });
      });
  };
}
