

export interface IRegister {
  firstName: string;
  lastName: string;
  emailAddress: string;
  mobileNumber: number;
  country: string;
  state: string;
  city: string;
  pincode: number;
}

export interface IRegisterComplete {
  name?: string;
  emailAddress?: string;
  synalId?: string;
  password?: string;
}

export interface ILogin { 
  keyUser: string;
  keyPassword: string;
}



