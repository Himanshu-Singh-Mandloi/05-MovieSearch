import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";


function Root() {

  const navigation = useNavigation();
  return (
    <nav>
      <Link to="/"> Movie Search </Link>
      {navigation.state === 'loading' ? <h1>Loading....</h1> : <Outlet /> }
    </nav>
  );
}

export default Root;
