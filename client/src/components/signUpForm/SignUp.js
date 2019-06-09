import React, { useState } from "react";

const Form = () => {
  const [name, updateName] = useState(``);
  // const [destination, updateDestination] = useState(``);
  // const [leaveDate, updateLeaveDate] = useState(``);
  // const [returnDate, updateReturnDate] = useState(``);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(name);
      }}
    >
      <input
        type={`name`}
        onChange={e => {
          updateName(e.target.value);
        }}
      />
      <input />
      <input />
      <input />
      <input type={`submit`} />
    </form>
  );
};

export default Form;
