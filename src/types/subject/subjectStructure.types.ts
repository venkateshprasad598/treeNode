export type IfaSubjectStructureType = {
  id: string;
  nodeId: string;
  type: string; // it can be individual/entity
  name: string;
  role: string; // this is dynamic based on type(entity/individual) ''
  children: IfaSubjectChildrenType[] | [];
  // entityData?: IfaEntityType | object | unknown;
  // individualData?: IfaIndividualType | object | unknown;
  portfolioData?: IfaPortfolioType;
  // portfolioId?: string;
};

export type IfaSubjectChildrenType = {
  id: string;
  nodeId: string;
  type: string;
  name: string;
  role: string;
  children: IfaSubjectChildrenType[] | [];
  // entityData?: IfaEntityType | object | unknown;
  // individualData?: IfaIndividualType | object | unknown;
  portfolioData?: IfaPortfolioType;
  // portfolioId?: string;
};

export type IfaPortfolioType = {
  currencySymbol: string;
  annualReturn: number;
};

export type EmailInfoType = { contactType: string } & CommonContactDetailsType;
export type MobileInfoType = { contactType: string } & CommonContactDetailsType;
export type FaxContactType = { contactType: string } & CommonContactDetailsType;
export type TelephoneContactType = {
  contactType: string;
} & CommonContactDetailsType;
export type AddressInfoType = {
  contactPreference: string;
  addressType: string | null;
  line1: string | null;
  line2: string | null;
  line3: string | null;
  landmark: string | null;
  city: string | null;
  stateOrProvince: string | null;
  country: string | null;
  residenceSince: number | null;
  postalCode: string | null;
  addressString: string | null;
};
export type GovernmentInfoType = {
  country: string | null;
  idType: string | null;
  idNumber: string | null;
  dateOfExpiry: number | null;
};

export type CommonContactDetailsType = {
  countryCode: string | null;
  contactAddress: string;
  contactAddressUseFor: string | null;
  notes: string | null;
  contactPreferenceCode: string | null;
  contactPreferredDays: string | null;
  contactPreferredTime: string | null;
  messageServiceCode: string | null;
  messageServiceUserName: string | null;
  contactNumber: string | null;
};

export type TaxInfoType = {
  id?: string | null | undefined;
  taxResidence: string;
  tin: string;
};

export type IfaEntityType = {
  id: string;
  profilePicture: string | null;
  registrationNumber: string | null;
  licenseNumber: string | null;
  placeOfIncorporation: string | null;
  dateOfIncorporation: number | null;
  primaryCountryOfAssetOperations: string | null;
  tin: string | null;
  structure: string | null;
  externalAuditor: string | null;
  financialServiceRegulator: string | null;
  isPublicListed: string;
  nameOfExchange: string | null;
  tickerName: string | null;
  addressList: AddressInfoType[];
  mobileDetailList: MobileInfoType[];
  emailDetailList: EmailInfoType[];
  governmentIdInfoList: GovernmentInfoType[];
  taxInfoList: TaxInfoType[];
};

export type IfaIndividualType = {
  id: string;
  profilePicture: string | null;
  firstName: string;
  middleName: string;
  lastName: string;
  fullName: string | null;
  phoneticName: string;
  previousName: string;
  dateOfBirth: null;
  likes: string;
  disLikes: string;
  isPep: boolean | string | undefined;
  pepFunction: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  addressList: AddressInfoType[];
  mobileDetailList: MobileInfoType[];
  emailDetailList: EmailInfoType[];
  governmentIdInfoList: GovernmentInfoType[];
  taxInfoList: TaxInfoType[];
};

export type EmploymentInfoType = {
  employeeID: string;
  currency: string;
  position: string;
  annualIncome: string;
};

export type DocumentType = {
  participantId: string;
  docTitle: string;
  stage: string;
  docType: string;
  clientDocUUID: string;
  clientDocName: string;
  clientDocPath: string;
  clientDocSize: number;
  active: boolean;
  name: string;
  url: string;
};

// export type IfaContextValuesType = {
//   addChildren: (nodeId: string, type: string) => void;
//   subjectStructureValue: IfaSubjectStructureType;
//   addSibling: (
//     role: string,
//     currentNodeId: string | undefined,
//     parentNodeId: string | unknown
//   ) => void;
//   addSelfNode: (
//     currentNodeId: string | undefined,
//     parentNodeId: string | unknown
//   ) => void;
//   deleteNode: (
//     role: string,
//     currentNodeId: string | undefined,
//     parentNodeId: string | unknown
//   ) => void;
//   selfNodeValueChange: (
//     keyName: string,
//     value: string,
//     currentNodeId: string | undefined,
//     parentNodeId: string | unknown
//   ) => void;
//   handleNodeDetailsClone: (
//     node: IfaSubjectStructureType,
//     currentNodeId: string | undefined,
//     parentNodeId: string | unknown
//   ) => void;
//   getNodeFormDetails: (
//     type: string,
//     currentNodeId: string | undefined,
//     parentNodeId: string | unknown,
//     id: string
//   ) => Promise<IfaSubjectChildrenType>;
//   nodeHandleChange: (
//     inputName: string,
//     inputValue: string | number,
//     inputEntityType: string,
//     inputEntityKeyName:
//       | string
//       | "id"
//       | "nodeId"
//       | "type"
//       | "name"
//       | "role"
//       | "children"
//       | "entityData"
//       | "individualData",
//     currentNodeId: string | undefined,
//     parentNodeId: string | unknown,
//     inputType: string,
//     inputEntityKeyType?: string | undefined,
//     multipleEntityIndex?:
//       | string
//       | "id"
//       | "nodeId"
//       | "type"
//       | "name"
//       | "role"
//       | "children"
//       | "entityData"
//       | "individualData",
//     multipleButtonType?: any
//   ) => void;
//   handleSubmitNode: (
//     type: string,
//     currentNodeId: string | undefined,
//     parentNodeId: string | unknown
//   ) => void;
//   clearForm: (currentNodeId: string) => void;
//   nodeDocumentPlaceHolder: (IfaNodePlaceholderType & SelectOptionType)[] | [];
//   selectedDocument: (IfaNodePlaceholderType & SelectOptionType) | null;
//   handleDocumentTypeSelect: (
//     event: (IfaNodePlaceholderType & SelectOptionType) | null
//   ) => void;
//   handleDocumentInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
//   prospectData: IfaSubjectType;
//   userDetails: UserDetailsType;
//   documentList: DocumentType[] | [];
//   isNodeDocumentLoaded: boolean;
// };
