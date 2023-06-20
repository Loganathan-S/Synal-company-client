import axios from "axios";


export const getComapnyInfo = async () => {
    // const response = await fetch("http://127.0.0.1:4000/api/company/companylist");
    // console.log(response);
    // return response.json();
   

    // const response = await axios("http://127.0.0.1:4000/api/company/companylist");
    // // console.log(response.data.result);
    // return response.data.result;

    // elu-ip-address
    const response = await axios.get("http://115.97.66.148:4000/api/company/companylist", {
      headers:{
        "Content-Type": "application/json"
      }
    });
    // console.log(response.data.result);
    return response.data.result;
  };