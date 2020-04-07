import React from "react";
import PropTypes from "prop-types";

function FriendCall({ name, rel, sex }) {
  let arrow = "";
  if (sex === "Man") {
    arrow = "He";
  } else {
    arrow = "She";
  }
  return (
    <div>
      <h3> I am {name} </h3>
      <h2>
        {arrow} is my {rel}
      </h2>
    </div>
  );
}

const FriendList = [
  {
    id: 1,
    name: "Jiwan",
    sex: "Man",
    rel: "me",
  },
  {
    id: 2,
    name: "Miyoung",
    sex: "Woman",
    rel: "girlfriend",
  },
  {
    id: 3,
    name: "Daeseong",
    sex: "Man",
    rel: "friend",
  },
];

FriendCall.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  rel: PropTypes.string.isRequired,
};

function App() {
  return (
    <div>
      <h1>hello world</h1>
      {FriendList.map((Friend) => (
        <FriendCall
          key={Friend.id}
          name={Friend.name}
          rel={Friend.rel}
          sex={Friend.sex}
        />
      ))}
    </div>
  );
}

export default App;
