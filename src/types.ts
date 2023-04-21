export interface Type {
  id: number;
  name: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  sex: number;
  profilePicture: string;
  position: string;
}
export interface Location {
  country: {
    name: string;
  };
  city: {
    name: string;
  };
  street: string;
  house: string;
  zipCode: string;
  longitude: string;
  latitude: string;
}

export interface Company {
  name: string;
  logo: string;
  address: Location;
}

export interface Trl {
  id: number;
  name: string;
  description?: string;
}

export interface InitialConfig {
  id: number;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: Type;
  categories: Type[];
  implementationEffortText: null;
  investmentEffort: string;
  trl: Type;
  video: string;
  user: User;
  company: Company;
  businessModels: Type[];
}
