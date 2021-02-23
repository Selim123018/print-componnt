import React, { Component } from "react";
import styled from "styled-components";
import { Table, TableBody, TableRow, TableCell, Link } from "@material-ui/core";

const leSignUpLink = "htttps:wwww.someWeirdWorld.com";

const PrintingScreen = styled(Table)`
  && {
    margin-top: 20px;
    display: none;
    @media print {
      display: block;
    }

    .MuiTableCell-root {
      border-bottom: none;
    }
  }
`;

//removed ---> // const PresentationWrapper = styled(TableRow)`
const DataWrapper = styled(TableCell)`
  && {
     /* height: ${props => (props.lastpage === "true" ? "100%" : "100vh")}; */
    padding-top: 25px;
    height: 100vh;
    display: flex;
  }
`;

//New Code
const TopAndBottomWrapper = styled(TableCell)`
  && {
    page-break-after: always;
  }
`;

const LEProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProfileElement = styled.span`
  margin-bottom: 13px;
`;

const Disclaimer = styled.div`
  color: #666;
  font-size: 13px;
  margin-bottom: 13px;
`;
const MailingBox = styled.div`
  margin-left: 6rem;
`;

const PrintTemplate = ({ myDetails }) => {
  return (
    <>
      {/*removed-----? <PresentationWrapper lastpage={lastPage}>
        <TableCell>&nbsp;</TableCell>
        <TableCell> */}
      <TableRow>
        <TopAndBottomWrapper>&nbsp;</TopAndBottomWrapper>
        <DataWrapper>
          <div>
            {/* <!-- START CENTERED WHITE CONTAINER --> */}
            <Table role="presentation">
              {/* <!-- START MAIN CONTENT AREA --> */}
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Table
                      role="presentation"
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            logo
                            <br />
                            <p>
                              Your<>&nbsp;</>
                              <b>Title</b>
                              <>&nbsp;</>has been created. Please go to
                              <>&nbsp;</>
                              <Link href={myDetails.userSignUpLink}>
                                {myDetails.userSignUpLink || leSignUpLink}
                              </Link>
                              <>&nbsp;</>
                              to complete the registration process.
                            </p>
                            <hr />
                            <MailingBox>
                              <br />
                              <br />
                              <br />
                              <div>
                                <b>{myDetails.name}</b>
                              </div>
                            </MailingBox>
                            <hr />
                            <h3>Licensee</h3>
                            <LEProfileWrapper>
                              <ProfileElement>
                                <b>Unique Identifier:</b>
                                <br /> {myDetails.uniqueId}
                              </ProfileElement>

                              {myDetails.email && myDetails.email.length > 0 ? (
                                <ProfileElement>
                                  <b>Email:</b>
                                  <br />
                                  {myDetails.email}
                                </ProfileElement>
                              ) : (
                                <ProfileElement />
                              )}
                            </LEProfileWrapper>
                            <LEProfileWrapper>
                              <ProfileElement>
                                dksjfhnklsdjahnfkl
                              </ProfileElement>
                            </LEProfileWrapper>
                            <div>
                              <hr />
                              <h3>Premises address</h3>
                              <LEProfileWrapper>
                                <ProfileElement>
                                  <b>Address Line 1:</b>
                                  <br />
                                </ProfileElement>
                                djhglksdfh
                              </LEProfileWrapper>
                              <LEProfileWrapper>
                                <ProfileElement>
                                  <b>City:</b>
                                  <br />
                                  djkhfgkljdfh
                                </ProfileElement>
                                <ProfileElement>
                                  <b>State:</b>
                                  <br />
                                  dkfjhgkjd
                                </ProfileElement>
                                <ProfileElement>
                                  <b>Zip Code:</b>
                                  <br />
                                  dfgdfjk
                                </ProfileElement>
                                <ProfileElement>
                                  <b>Country:</b>
                                  <br />
                                  fdgjfhd
                                </ProfileElement>
                              </LEProfileWrapper>
                              <Disclaimer>
                                * The premises address is provided for
                                verification purposes. If you have a license at
                                more than one premises, only one of those
                                addresses is displayed. If you do not possess an
                                active license at the displayed premises
                                address, do not complete the registration
                                process and contact the Unit at&nbsp;
                                <Link href="mailto:PPS@WWD.df.awsw">
                                  PPS@WWD.df.awsw
                                </Link>
                                .
                              </Disclaimer>
                            </div>
                            <hr />
                            <br />
                            Sub titile
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
              </TableBody>
              {/* <!-- END MAIN CONTENT AREA --> */}
            </Table>

            {/* <!-- END CENTERED WHITE CONTAINER --> */}
          </div>
          {/* removed ---> </TableCell>
        <TableCell>&nbsp;</TableCell>
      </PresentationWrapper> */}
        </DataWrapper>
        <TopAndBottomWrapper>&nbsp;</TopAndBottomWrapper>
      </TableRow>
    </>
  );
};

class ParentPrintTemplate extends Component {
  render() {
    const { printingProps } = this.props;
    // printingProps is an array of myDetails
    // Each value inside printingProps is used to build the printing component for each page
    let printingPages = [];
    //  let counter = 0
    // let lastPage = 'false'
    for (const myDetails of printingProps) {
      //   counter += 1
      //   if (counter === printingProps.length) {
      //     lastPage = 'true'
      //   }
      const tempTemplate = (
        //     <PrintTemplate
        //       myDetails={myDetails}
        //       lastPage={lastPage}
        //     />
        <PrintTemplate myDetails={myDetails} />
      );
      printingPages.push(tempTemplate);
    }
    const finalTable = (
      <>
        <PrintingScreen
          size="small"
          role="presentation"
          border="0"
          cellPadding="0"
          cellSpacing="0"
        >
          <>
            {/* map and create single component for each page */}
            {printingPages.map((page, index) => (
              <TableBody key={index}>{page}</TableBody>
            ))}
          </>
        </PrintingScreen>
      </>
    );

    return finalTable;
  }
}
ParentPrintTemplate.defaultProps = {
  printingProps: []
};
export default ParentPrintTemplate;
