import React, { useEffect }from "react";

function renderTableHeader(header) {
  return header.map((key, index) => {
     return <th className={key} key={index}>{key.toUpperCase()}</th>
  })
}

function renderTableData(chardetails) {
  return chardetails.map((chardetail, index) => {
    if (index == 0) return;
     const [Area, Zone, Bank, Stand, NetWin, OldDenom, NewDenom, OldPayback, NewPayback, Asset, Date] = chardetail //destructuring
     return (
        <tr key={Area}>
          <td className="Area">{Area}</td>
           <td className="Zone">{Zone}</td>
           <td className="Bank">{Bank}</td>
           <td className="Stand">{Stand}</td>
           <td className="NetWin">{NetWin}</td>
           <td className="Old Denom">{OldDenom}</td>
           <td className="New Denom">{NewDenom}</td>
           <td className="Old Payback %">{OldPayback}</td>
           <td className="New Payback %">{NewPayback}</td>
           <td className="Asset">{Asset}</td>
           <td className="Date">{Date}</td>
        </tr>
     )
  })
}

function CharDeatils(props) {
  let chardetails = props.charlists;
  console.log('props', props)
  useEffect(() => {
    
  }, []);
  if (typeof chardetails !== "undefined" && chardetails !== "" && chardetails.length > 0) {
      return (
        <div>
           <h2 id='title'>Data List
           <button className="reset_data_list" type="button" onClick={(event) => props.resetAll(event)}>Reset</button>
           </h2>
           <table id='myTable'>
              <tbody>
              <tr className="header">{renderTableHeader(chardetails[0])}</tr>
              {renderTableData(chardetails)}
              </tbody>
           </table>
        </div>
     )
  } else {
    return "No Data";
  }
}

export default CharDeatils;
