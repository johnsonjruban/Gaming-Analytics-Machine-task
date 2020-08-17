import React, { useState, useEffect } from "react";
import { authHeader } from "../helpers";
import { connect } from "react-redux";
import { Row } from "react-bootstrap";
import "../assets/css/cards.css";
import CharDeatils from "./CharDetails";
import FilterBlock from "./FilterBlock";
import { BeatLoader } from "react-spinners";
import {
  fetchSuccess,
  fetchFailure,
  startProcess,
  stopProcess,
} from "../redux";
import { css } from "@emotion/core";
import { ExcelRenderer, OutTable } from "react-excel-renderer";

function highlight_row() {
  var table = document.getElementById("myTable");
  console.log("table", table);
  if (table != null && table != "") {
    var cells = table.getElementsByTagName("td");

    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      cell.onclick = function () {
        var rowId = this.parentNode.rowIndex;
        var rowsNotSelected = table.getElementsByTagName("th");
        for (var row = 0; row < rowsNotSelected.length; row++) {
          rowsNotSelected[row].classList.remove("selected");
        }

        var colsNotSelected = table.getElementsByTagName("td");
        for (var col = 0; col < colsNotSelected.length; col++) {
          colsNotSelected[col].classList.remove("selected");
        }
        var currentClassName = this.className;
        var colSelected = table.getElementsByClassName(currentClassName);

        let len = colSelected !== null ? colSelected.length : 0;
        let i = 0;
        for (i; i < len; i++) {
          colSelected[i].className += " selected";
        }
      };
    }
  }
}

function dehighlight_all() {
  var table = document.getElementById("myTable");
  console.log("table", table);
  if (table != null && table != "") {
    var rowsNotSelected = table.getElementsByTagName("th");
    for (var row = 0; row < rowsNotSelected.length; row++) {
      rowsNotSelected[row].classList.remove("selected");
    }

    var colsNotSelected = table.getElementsByTagName("td");
    for (var col = 0; col < colsNotSelected.length; col++) {
      colsNotSelected[col].classList.remove("selected");
    }
  }
}

const loaderCss = css`
  margin-top: 25px;
  margin-bottom: 25px;
`;
function ListUser(props) {
  const loading = props.loading;
  useEffect(() => {
    console.log("List file rendered");
  }, []);

  const loadExcelList = (event) => {
    props.dispatch(startProcess());
    const fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        props.dispatch(fetchFailure(err));
      } else {
        props.dispatch(fetchSuccess(resp.rows));
        highlight_row();
      }
    });
    props.dispatch(stopProcess());
  };

  const resetAll = (event) => {
    dehighlight_all();
  };

  let characterLists = props.data;
  return (
    <div>
      <div>
        <h4>List Data</h4>
        <FilterBlock loadExcelList={loadExcelList} />
        <Row className="row">
          <CharDeatils charlists={characterLists} resetAll={resetAll} />
        </Row>
        <div className="global_loader">
          <BeatLoader
            css={loaderCss}
            size={75}
            color="maroon"
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log("mapStateToProps state", state);
  return {
    loading: state.user.loading,
    error: state.user.error,
    data: state.user.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
