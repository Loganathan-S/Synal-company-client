import {ReactNode} from "react";

export interface CompanyProps {
    id:number;
    companyName: string;
    address: string;
    country: string;
    phone:number;
    fax: number;
    mobilePhone:number;
    emailAddress:string;
    internetAddress:string;
    companyRegNo:number;
    vatRegNo:number;
    managingDirector:string;
  }
  
  
  export interface companyInfoProps {
   companyList:CompanyProps[];
   selectedComapny: (id:number) => void;
  //  data:CompanyProps[];
  // selectedDeatils:CompanyProps
  }
  
  
  export interface companyProviderProps {
    children: ReactNode;
  }