import { useContext, useState } from "react";
import { CompanyContext } from "../../context/CompanyContext";
import { Link, useLocation } from "react-router-dom";


import { useForm } from "react-hook-form";
import "../../assets/images/wooden_background.jpg";
 import "../../assets/global.css";

const CompanyDetails = (match: any) => {
  const location = useLocation();
  const data = location.state;
  let marginStyle = {
    margin: 0,
  };
  const [paragraph, setParagraph] = useState("paraGraph");
  // const { control } = useForm();
  const { companyList } = useContext(CompanyContext);

  // const {companyName} = selectedDeatils;

  const desiredItem = companyList.find((item) => item.id === data);
  // console.log(companyInfo);

  return (
    <>
      <div className="mt-2 mb-3 mt-3">
        {desiredItem ? (
          <div className="card p-0 col-md-12">
            <div className="card-header bg_image p-0 "></div>
            <div className="card-body position-relative">
              <div className="row">
                <div className="position-absolute top-0 start-0 translate-middle-y  ">
                  <img
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324"
                    alt="test"
                    height="130"
                    width="130"
                    className="rounded-circle mb-3 border"
                  />
                </div>
                <div className="row mt-5">
                  <div className="col-md-6">
                    <h5 className="m-0">{desiredItem.companyName}</h5>
                    <p className="m-0">{desiredItem.address} </p>
                    <p className="mt-1">
                    <span style={marginStyle} className={`${paragraph}`}>
                        E-mail:{" "}
                      </span>
                      <Link to=""          >{desiredItem?.emailAddress}</Link><br />
                      <span className={`${paragraph}`}>
                        {" "}
                        Mobile phone:{" "}
                      </span>{" "}
                      <span>{desiredItem?.mobilePhone}</span> <br />
                      <span style={marginStyle} className={`${paragraph}`}>
                        Country:
                      </span>{" "}
                      <span> {desiredItem?.country}</span> <br />
                      <span style={marginStyle} className={`${paragraph}`}>
                        Phone:{" "}
                      </span>{" "}
                      <span>{desiredItem?.phone}</span> <br />
             
                    </p>
                  </div>
                  <div className="col-md-6 mt-md-2">
                    <p>
                    <span style={marginStyle} className={`${paragraph}`}>
                        Fax:{" "}
                      </span>{" "}
                      <span>{desiredItem?.fax}</span> <br />
                      <span style={marginStyle} className={`${paragraph}`}>
                        Comapny Reg.no:{" "}
                      </span>{" "}
                      <span>{desiredItem?.companyRegNo}</span> <br />
                      <span style={marginStyle} className={`${paragraph}`}>
                        VAT reg.no:{" "}
                      </span>
                      <span>{desiredItem?.vatRegNo}</span> <br />
                      <span style={marginStyle} className={`${paragraph}`}>
                        Managing director:{" "}
                      </span>
                      <span>{desiredItem?.managingDirector}</span> <br />
                      <span className={`${paragraph}`}> Website:</span>{" "}
                      <Link to=""> {desiredItem?.internetAddress}</Link> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // <div className="card col-md-12">
          //   <div className="card-body">
          //     <form>
          //       <div className="row">
          //         <div className="col-md-6">
          //           <div className="mb-2">
          //             <label className="form-label">Company</label>
          //             <InputController
          //               inputType="text"
          //               label=""
          //               id="companyname"
          //               inputProps={{
          //                 name: "companyname",
          //                 control: control,
          //                 defaultValue: desiredItem.companyName,
          //               }}
          //             />
          //           </div>
          //           <div className="mb-2">
          //             <label className="form-label">Address</label>
          //             <textarea className="form-control" name="" id="" cols={30} rows={3}>
          //               {desiredItem.address.split(',').join("\n")}
          //             </textarea>
          //             {/* <InputController
          //               inputType="text"
          //               label=""
          //               id="address"
          //               inputProps={{
          //                 name: "address",
          //                 control: control,
          //                 defaultValue: desiredItem.address,
          //               }}
          //             /> */}
          //           </div>
          //           <div className="mb-2">
          //             <label className="form-label">Country</label>
          //             <InputController
          //               inputType="text"
          //               label=""
          //               id="country"
          //               inputProps={{
          //                 name: "country",
          //                 control: control,
          //                 defaultValue: desiredItem.country,
          //               }}
          //             />
          //           </div>
          //           <div className="mb-2">
          //             <label className="form-label">Phone</label>
          //             <InputController
          //               inputType="text"
          //               label=""
          //               id="phone"
          //               inputProps={{
          //                 name: "phone",
          //                 control: control,
          //                 defaultValue: desiredItem.phone,
          //               }}
          //             />
          //           </div>
          //           <div className="mb-2">
          //             <label className="form-label">Fax</label>
          //             <InputController
          //               inputType="text"
          //               label=""
          //               id="fax"
          //               inputProps={{
          //                 name: "fax",
          //                 control: control,
          //                 defaultValue: desiredItem.fax,
          //               }}
          //             />
          //           </div>
          //           <div className="mb-2">
          //             <label className="form-label">Mobile phone</label>
          //             <InputController
          //               inputType="text"
          //               label=""
          //               id="number"
          //               inputProps={{
          //                 name: "number",
          //                 control: control,
          //                 defaultValue: desiredItem.mobilePhone,
          //               }}
          //             />
          //           </div>
          //         </div>
          //         <div className="col-md-6">
          //           <div className="mb-2">
          //             <label className="form-label">Comapny Reg.no</label>
          //             <InputController
          //               inputType="text"
          //               label=""
          //               id="number"
          //               inputProps={{
          //                 name: "number",
          //                 control: control,
          //                 defaultValue:desiredItem.companyRegNo,
          //               }}
          //             />
          //           </div>
          //           <div className="mb-2">
          //             <label className="form-label">VAT reg.no</label>
          //             <InputController
          //               inputType="text"
          //               label=""
          //               id="number"
          //               inputProps={{
          //                 name: "number",
          //                 control: control,
          //                 defaultValue: desiredItem.vatRegNo,
          //               }}
          //             />
          //           </div>
          //           <div className="mb-2">
          //             <label className="form-label">Managing director</label>
          //             <InputController
          //               inputType="text"
          //               label=""
          //               id="managingDirector"
          //               inputProps={{
          //                 name: "managingDirector",
          //                 control: control,
          //                 defaultValue: desiredItem.managingDirector,
          //               }}
          //             />
          //           </div>
          //           <div className="mb-2">
          //             <label className="form-label">E-mail</label>
          //             <InputController
          //               inputType="email"
          //               label=""
          //               id="email"
          //               inputProps={{
          //                 name: "email",
          //                 control: control,
          //                 defaultValue: desiredItem.emailAddress,
          //               }}
          //             />
          //           </div>
          //           <div className="mb-2">
          //             <label className="form-label">Internet</label>
          //             <InputController
          //               inputType="text"
          //               label=""
          //               id="internet"
          //               inputProps={{
          //                 name: "internet",
          //                 control: control,
          //                 defaultValue: desiredItem.internetAddress,
          //               }}
          //             />
          //           </div>
          //         </div>
          //       </div>
          //       <div className="mt-2 mb-2">
          //         <button type="submit" className="btn btn-primary">
          //           Submit
          //         </button>
          //       </div>
          //     </form>
          //   </div>
          // </div>
          <p>Item Not found</p>
        )}
      </div>
    </>
  );
};

export default CompanyDetails;
