const config = process.env.NODE_ENV !== "production" ? await import("dotenv") : null;

if (config) config.config();

export const SERVER_PORT = process.env.SERVER_PORT || 5000;
export const COOKIE_SECRET = process.env.COOKIE_SECRET;

export const FTP_HOST = process.env.FTP_HOST;
export const FTP_USER = process.env.FTP_USER;
export const FTP_PASSWORD = process.env.FTP_PASSWORD;

export const TEST_A_Table = process.env.TEST_A_Table;
export const TEST_B_Table = process.env.TEST_B_Table;



export const XML_SRC_PATH = process.env.XML_SRC_PATH;

// export const XML_DST_PATH = process.env.XML_PATH_WINDOWS_DST_PATH;
// export const XML_PATH_POS_STATION = process.env.XML_PATH_WINDOWS_POS_STATION;
// export const XML_PATH_POS_DIVISION = process.env.XML_PATH_WINDOWS_POS_DIVISION;

export const XML_DST_PATH = process.env.XML_PATH_MAC_DST_PATH;
export const XML_PATH_POS_STATION = process.env.XML_PATH_MAC_POS_STATION;
export const XML_PATH_POS_DIVISION = process.env.XML_PATH_MAC_POS_DIVISION;