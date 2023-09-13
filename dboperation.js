var config = require("./dbconfig");
const sql = require("mssql");
 
async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log(" mathus-error :" + error);
  }
}

async function executeQuery(query, parameters) {
  try {
    let pool = await sql.connect(config);
    let res = await pool.request()
    return res.recordsets;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}


async function UserTable() {
  try {
    const query = "SELECT * FROM [dbo].[User]";
    const parameters = [];
    let pool = await sql.connect(config);
    let result = await pool.request().query(query);
    return result.recordset; // Return the retrieved data
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}


async function AllData() {
  try {
    const query = "SELECT * FROM [dbo].[User], [dbo].[Login];";
    const parameters = [];
    let pool = await sql.connect(config);
    let result = await pool.request().query(query);
    return result.recordset; // Return the retrieved data
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}





module.exports = {
  getdata: getdata,
  UserTable:UserTable,
  AllData:AllData
};
