import Link from "next/link";
import React from "react";

const Button = (props) => {
  return (
    <div>
      <Link href={props.link}>
        <a className="bg-teal-700 text-teal-100 px-4 py-2 rounded">
          {props.children}
        </a>
      </Link>
    </div>
  );
};

export default Button;
