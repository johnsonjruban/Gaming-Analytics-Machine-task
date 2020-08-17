import React from "react";

function FilterBlock(props) {
  return (
    <div>
      <div className="filter_wrap">
        <div className="row">
          <div className="col-lg-6 col-sm-8 col-12">
            <div className="input-group mb-3">
              <div className="input-group-append">
                <input
                  type="file"
                  accept=".xlsx"
                  onChange={(event) => props.loadExcelList(event)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBlock;
