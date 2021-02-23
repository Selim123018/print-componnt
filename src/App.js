import React, { useRef } from "react";
import './App.css'
import styled from "styled-components";
import ParentPrintTemplate from "./components/ParentPrintTemplate";
import { Button } from "@material-ui/core";
import ReactToPrint from "react-to-print";

const DontPrintWrapper = styled.div`
  @media print {
    display: none;
  }
`;

const App = () => {
  const componentRef = useRef();
  const printingProps = [
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    }
  ];
  return (
    <>
      <DontPrintWrapper>
        <div className="App">
          <h2>Print your components </h2>
          <ReactToPrint
            copyStyles={true}
            trigger={() => (
              <Button
                aria-label="Print Licensee profile"
                aria-haspopup="false"
                color="primary"
              >
                Print
              </Button>
            )}
            content={() => componentRef.current}
          />
        </div>
      </DontPrintWrapper>
      <ParentPrintTemplate ref={componentRef} printingProps={printingProps} />
    </>
  );
};
export default App;
