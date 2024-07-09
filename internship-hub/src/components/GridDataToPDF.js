// GridDataToPDF.js

import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/apiService'; // Adjust path as per your project structure
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import companyLogo from '../assets/img/company-logo.png'; // Adjust path as per your project structure

const GridDataToPDF = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        const result = await fetchData();
        setData(result.data); // Assuming result.data contains the array of countries
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAndSetData();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add company logo
    doc.addImage(companyLogo, 'PNG', 10, 10, 40, 30); // Place image at (10, 10) with width 40 and height 35

    // Add company info text with different font sizes and reduced line spacing
    doc.setFontSize(20); // Font size for <h1>
    doc.text('Amlino Technologies Pvt Ltd', 60, 30);

    doc.setFontSize(10); // Font size for <h2>
    doc.text('Delhi | Delhi | 110092', 60, 35); // Reduced the y-coordinate

    doc.setFontSize(10); // Font size for <h2>
    doc.text('9873718915 | info@amlino.com', 60, 40); // Reduced the y-coordinate

    // Add title for table
    doc.text('Country Data', 14, 60);

    // Generate table with fetched data
    const tableData = data.map(({ countryid, countryname }) => [countryid, countryname]);

    doc.autoTable({
      head: [['Country ID', 'Country Name']],
      body: tableData,
      startY: 70, // Adjust startY position to leave space for company info and title
    });

    doc.save('country-data.pdf');
  };

  return (
    <div id='gridDataToPDF' style={styles.container}>
      <div className="row mt-4">
        <div className="col">
          <h2 className="text-center">Data from API</h2>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col text-center">
          <button onClick={generatePDF} className="btn btn-primary">
            Generate PDF
          </button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Country ID</th>
                <th scope="col">Country Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ countryid, countryname }) => (
                <tr key={countryid}>
                  <td>{countryid}</td>
                  <td>{countryname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border:' 1px solid black',

    height: '100vh',
    padding: '100px',
    backgroundColor: '#ffe89c',
    fontFamily: 'Arial, sans-serif',
  },
}
export default GridDataToPDF;
