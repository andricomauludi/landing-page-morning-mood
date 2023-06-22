import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { faInfo, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const { SearchBar } = Search;

// {/**untuk menyimpan column ini dari mana aja */}

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "nama_product",
    text: "Nama Product",
    sort: true,
  },
  {
    dataField: "harga",
    text: "Harga",
    sort: true,
  },
  {
    dataField: "deskripsi",
    text: "Deskripsi",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="dark" className="me-2">
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>
          <Link to={"edit/" + row.id}>
            <Button color="dark" className="me-2">
              <FontAwesomeIcon icon={faEdit} /> edit
            </Button>
          </Link>
          <Link to={"delete"}>
            <Button color="dark" className="me-2">
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </Link>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "ID",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  //membuat props berasal dari state yang dihasilkan oleh redux-toolkit
  return {
    getProductLists: state.users.getProductLists, //variable awal untuk diambil sama props, state untuk ambil dar store nya, users pertama untuk ambil di rootreducer, user kedua nama variable didalam state users.js
    errorProductLists: state.users.errorProductLists, //variable awal untuk diambil sama props, state untuk ambil dar store nya, users pertama untuk ambil di rootreducer, user kedua nama variable didalam state users.js
  };
};

const TableComponent = (props) => {
  return (
    // {/* toolkit untuk membantu table dalam menggunakan searchbar, tombol tambahan */}
    <Container style={{ padding: "10px" }}>
      {props.getProductLists ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getProductLists}
          columns={columns}
          search
          defaultSorted={defaultSorted}
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to={"/create"}>
                    <Button color="dark" className="me-2">
                      <FontAwesomeIcon icon={faUserPlus} /> Create User
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div style={{ textAlign: "right" }} className="my-3">
                    <SearchBar {...props.searchProps} placeholder="Search..." />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorProductLists ? <h4 style={{color:"red"}}>{props.errorProductLists}</h4> : <Spinner color="dark" />}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
