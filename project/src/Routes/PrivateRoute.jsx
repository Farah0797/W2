import React from "react";

export default function PrivateRoute({ children }) {
    const token = localStorage.getItem("id");
    return token ? children : <div>Not Authorized</div>;
}