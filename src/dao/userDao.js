const { pool } = require("../../database");

exports.insertUser = async function (email, password, nickname) {
  try {
    //DB 연결 검사

    const connection = await pool.getConnection(async (conn) => conn);

    //쿼리
    try {
      const insertUserQuery =
        "insert into Users (email, password, nickname) values (?, ?, ?);";
      const insertUserParams = [email, password, nickname];

      const [row] = await connection.query(insertUserQuery, insertUserParams);

      connection.release();
      return row;


    } catch (err) {
      console.error(" ##### insertUser Query Error ^^^^^");
      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error(" ##### insertUser DB Error ^^^^^");
    return false;
  }
};


exports.selectUserByEmail = async function (email) {
  try {
    //DB 연결 검사

    const connection = await pool.getConnection(async (conn) => conn);

    //쿼리
    try {
      const selectUserByEmailQuery =
        "select * from Users where email = ?;";
      const selectUserByEmailParams = [email];

      const [row] = await connection.query(selectUserByEmailQuery, selectUserByEmailParams);

      connection.release();
      return row;


    } catch (err) {
      console.error(" ##### insertUser Query Error ^^^^^");
      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error(" ##### insertUser DB Error ^^^^^");
    return false;
  }
}


exports.selectUser = async function (email, password) {
  try {
    //DB 연결 검사

    const connection = await pool.getConnection(async (conn) => conn);

    //쿼리
    try {
      const selectUserQuery =
        "select * from Users where email = ? and password = ?";
      const selectUserParams = [email,password];

      const [row] = await connection.query(selectUserQuery, selectUserParams);

      connection.release();
      return row;


    } catch (err) {
      console.error(" ##### selectUser Query Error ^^^^^");
      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error(" ##### selectUser DB Error ^^^^^");
    return false;
  }
}

exports.selectNicknameByUserIdx = async function (userIdx) {
  try {
    //DB 연결 검사

    const connection = await pool.getConnection(async (conn) => conn);

    //쿼리
    try {
      const selectNicknameByUserIdxQuery =
        "select * from Users where userIdx=?;";
      const selectNicknameByUserIdxParams = [userIdx];

      const [row] = await connection.query(
        selectNicknameByUserIdxQuery, selectNicknameByUserIdxParams);

      connection.release();
      return row;


    } catch (err) {
      console.error(" ##### selectNicknameByUserIdx Query Error ^^^^^");
      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error(" ##### selectNicknameByUserIdx DB Error ^^^^^");
    return false;
  }
}