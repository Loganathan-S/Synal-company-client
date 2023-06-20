import { createContext, useState, useEffect } from "react";
import {
  companyInfoProps,
  companyProviderProps,
} from "../interfaces/companyinterface";

import { useQuery } from "@tanstack/react-query";
import {getComapnyInfo} from "../services/index";
import { useLocation, useNavigate } from "react-router-dom";

const intialValue: companyInfoProps = {
  // companyInfo: [],
  companyList:[],
  selectedComapny:() => {}
};

export const CompanyContext = createContext<companyInfoProps>(intialValue);

export const CompanyProvider: React.FC<companyProviderProps> = ({
  children,
}) => {


   const [companyInfo, setCompanyInfo] = useState([]);

  // useEffect(() => {
  //   const getCompanyInfo = async () => {
  //     const response = await fetch("http://127.0.0.1:4000/api/company/companylist");
  //     const data = await response.json();
  //     setCompanyInfo(data.result);
  //     console.log(data.result);
  //   };
  //   getCompanyInfo();
  // }, []);

  const navigate = useNavigate();

// react - query
  const {data}  = useQuery({
    queryKey:["companylist" ,companyInfo ],
    queryFn: getComapnyInfo,
  })


  const selectedComapny = (id:number) => {
    const desiredItem = data.find((item:any) => item.id === id);
    navigate(`/companydetail`,{ state: id });
  }


  let valueContext = {
    // companyInfo,
    selectedComapny,
    companyList:data,
  };



 

  return (
    <CompanyContext.Provider value={valueContext}>
      {children}
    </CompanyContext.Provider>
  );
};
