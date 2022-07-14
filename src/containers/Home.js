import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container } from "../components";
import { getBankData } from "../actions";
import "./Home.css";
import DataTable from "../components/DataTable";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Home = ({ data, bankdata, getBankData }) => {
  const [menu, setMenu] = useState([
    {
      title: "Home",
      action: "/"
    }
  ]);

  return (
    <React.Fragment>
      <Container menu={menu}>
        <Alert severity="info">
          <AlertTitle>Notificação</AlertTitle>
          Caros usuários, <strong>seus dados bancários</strong> se encontram na
          setinha no canto esquerdo.
        </Alert>

        <DataTable data={bankdata} />
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  data: state.home,
  bankdata: state.home.bankdata
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBankData: dispatch(getBankData())
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
