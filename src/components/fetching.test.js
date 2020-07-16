import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders Contact Form without crashing", async () => {
  render(<ContactForm />);
  
  function fetchData(callback) {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        const user = {
          id: data.id,
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          avatar: data.avatar,
        };
        
        console.log(user.id);
      })
      .catch((err) => console.log(err));
  }

  function callback(data) {
    expect(data).toBe("user data is working after fetch");
  }

  await fetchData(callback);
});
