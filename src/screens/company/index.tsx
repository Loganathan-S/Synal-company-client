import { useContext } from "react";
import { CompanyContext } from "../../context/CompanyContext";
import { useNavigate } from "react-router-dom";

const Companyinfo = () => {
  const {  companyList,selectedComapny } = useContext(CompanyContext);
  // console.log(companyInfo);
  const navigate = useNavigate();

  const viewCompanyInfo = (id: number) => {
    // navigate(`/companydetail`,{ state: id });
    // console.log(id);  
    selectedComapny(id);
  };

  return (
    <div className="row d-flex justify-content-center mt-2 min-vh-100 ">
      <div className="col-md-12">
        <h5 className="">Company</h5>
        <div className="table-responsive">
            <table className="table table-hover table-sm table-bordered text-center">
              <thead>
                <tr>
                  <th scope="">S.No</th>
                  <th scope="">Company Name</th>
                  <th scope="">Managing Director</th>
                  <th scope="">Website</th>
                  <th scope="">Country</th>
                  <th scope="">More Info</th>
                </tr>
              </thead>
              <tbody className="">
                {companyList?.map((info, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{info.companyName}</td>
                    <td>{info.managingDirector.charAt(0).toUpperCase() + info.managingDirector.slice(1)}</td>
                    <td>{info.internetAddress}</td>
                    <td>{info.country.charAt(0).toUpperCase() + info.country.slice(1)}</td>
                    <td>
                      <button
                        className="btn btn-outline-primary px-3 btn-sm "
                        onClick={() => viewCompanyInfo(info.id)}
                      >
                        view
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>
 
  );
};

export default Companyinfo;
