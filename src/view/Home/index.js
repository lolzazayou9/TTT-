import React, { useState } from "react";

const ARRAY = [
  { color: 'red', name: 'red' },
  { color: 'green', name: 'green' },
  { color: 'blue', name: 'blue' }
];

function Homepage() {
  const [clickedColors, setClickedColors] = useState([]);

  const Clicktotable = (item) => {
    setClickedColors([...clickedColors, item]);
  };

  return (
    <div className="row">
      <label>การบ้าน 1</label>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {ARRAY.map((item, index) => (
          <div 
            key={index}
            onClick={() => Clicktotable(item)}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: item.color,
              margin: '0 10px',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
          />
        ))}
      </div>
      {clickedColors.length > 0 && (
        <table style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>ลำดับ</th>
              <th style={tableHeaderStyle}>ชื่อสี</th>
              <th style={tableHeaderStyle}>สี</th>
            </tr>
          </thead>
          <tbody> 
            {clickedColors.map((item, index) => (
              <tr key={index}>
                <td style={tableCellStyle}>{index+1}</td>
                <td style={tableCellStyle}>{item.name}</td>
                <td style={tableCellStyle}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: item.color,
                    margin: 'auto'
                  }}></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const tableHeaderStyle = {
  border: '1px solid black',
  padding: '10px',
  backgroundColor: '#f2f2f2'
};

const tableCellStyle = {
  border: '1px solid black',
  padding: '10px',
  textAlign: 'center'
};

export { Homepage };