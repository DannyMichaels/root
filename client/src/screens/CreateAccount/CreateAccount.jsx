import React from "react";
import { Link } from "react-router-dom";
import CreateAccountForm from "../../components/CreateAccount/CreateAccountForm";
import StyledDiv from "./StyledCreateAccount";
import LogoBanner from "../../components/shared/LogoBanner/LogoBanner";
import Layout from '../../components/shared/Layout/Layout'
function AddTransportationType() {
  return (
    <>
     <Layout>
      <StyledDiv>
        <div className="top-container">
            <div className="top-left-container">
              
            <LogoBanner title="Create Your Account" />
          </div>
          <div className="top-right-container"></div>
        </div>
        <div className="middle-container">
            <h1 className="user-picture">EDIT IMAGE</h1>
            <CreateAccountForm />
        </div>
        </StyledDiv>
        </Layout>
    </>
  );
}

export default AddTransportationType;
