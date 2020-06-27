import React from "react";
import { Link } from 'gatsby';
import Header from '../components/header';

export default function Home() {
  return (
    <div style={{color: `purple`}}>
      <Link to="/contect/">Contact</Link>
      <Header headerText="Hello World!" />
      <Link to="/about/">About</Link>
      <Header headerText="It's pretty cool" />
      <p>Welcome to my page</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
