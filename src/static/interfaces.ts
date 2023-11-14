export interface Device {
  stn: string;
  div: string;
  xmlID: string;
  name: string;
}


export interface CustomRequest extends Request {
  xmlStations: string[];
  xmlDivisions: string[];
  xmlDevices: Array<Array<Device>>;
}

export interface ExtendedRequest extends Request {
  xmlFiles: Array<[string, string, string]>;
  xmlStations: string[];
  xmlDivisions: string[];
  xmlDevices: Array<any>;  // 적절한 타입으로 대체 필요
}

export interface ExtractedData {
  id: string;
  nm: string;
  xmlid?: string;  // 옵셔널 속성으로 가정
}