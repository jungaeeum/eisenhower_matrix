const { pool } = require("../../database");

exports.getUserRows = async function () {
  try {

    //DB 연결 검사

    const connection = await pool.getConnection(async (conn) => conn);
    
    //쿼리
    try {
      const selectUserQuery = "SELECT * FROM Users;";

      const [row] = await connection.query(selectUserQuery)

      connection.release();
      return false;

    } catch(err) {
      console.error (' ##### getUserRows Query Error ^^^^^')
    return false;
    } finally {
      connection.release()
    }

  } catch (err) {
    console.error (' ##### getUserRows DB Error ^^^^^')
    return false;
  }
}


exports.insertTodo = async function (userIdx, contents, type) {
  try {

    //DB 연결 검사

    const connection = await pool.getConnection(async (conn) => conn);
    
    //쿼리
    try {
      const insertTodoQuery = "insert into Todos (userIdx, contents, type) values (?, ?, ?);";

      const insertTodoParams = [userIdx, contents, type];

      const [row] = await connection.query(insertTodoQuery, insertTodoParams)

      connection.release();
      return row;

    } catch(err) {
      console.error (` ##### insertTodo Query Error ^^^^^ \n ${err}`);
    return false;
    } finally {
      connection.release()
    }

  } catch (err) {
    console.error (` ##### insertTodo DB Error ^^^^^ \n ${err} `)
    return false;
  }
}

exports.selectTodoByType = async function (userIdx, type) {
  try {

    //DB 연결 검사

    const connection = await pool.getConnection(async (conn) => conn);
    
    //쿼리
    try {
      const selectTodoByTypeQuery = 
      "select todoIdx, contents, status from Todos where userIdx = ?  and type = ? and not (status='D');";

      const selectTodoByTypeParams = [userIdx, type];

      const [row] = await connection.query(selectTodoByTypeQuery, selectTodoByTypeParams)

      connection.release();
      return row;

    } catch(err) {
      console.error (` ##### selectTodoByTypeQuery Query Error ^^^^^ \n ${err}`);
    return false;
  } finally {
    connection.release()
  }

} catch (err) {
  console.error (` ##### selectTodoByTypeParams DB Error ^^^^^ \n ${err} `)
  return false;
}
  
}

exports.selectValidTodo = async function(userIdx, todoIdx) {
  try {

    //DB 연결 검사

    const connection = await pool.getConnection(async (conn) => conn);
    
    //쿼리
    try {
      const selectValidTodoQuery = 
      "select * from Todos where userIdx = ? and todoIdx = ? and not(status='D');";

      const selectValidTodoParams = [userIdx, type];

      const [row] = await connection.query(selectValidTodoQuery, selectValidTodoParams)

      connection.release();
      return row;

    } catch(err) {
      console.error (` ##### selectTodoByTypeQuery Query Error ^^^^^ \n ${err}`);
    return false;
  } finally {
    connection.release()
  }

} catch (err) {
  console.error (` ##### selectTodoByTypeParams DB Error ^^^^^ \n ${err} `)
  return false;
}

}

exports.updateTodo = async function(userIdx, todoIdx, contents, status) {
  try {

    //DB 연결 검사

    const connection = await pool.getConnection(async (conn) => conn);
    
    //쿼리
    try {
      const updateTodoQuery = 
      "update Todos set contents = ifnull(?, contents) , status = ifnull(?, status) where userIdx = ? and todoIdx = ? ;";

      const updateTodoParams = [contents, status, userIdx, todoIdx];

      const [row] = await connection.query(updateTodoQuery, updateTodoParams)

      connection.release();
      return row;

    } catch(err) {
      console.error (` ##### updateTodoByTypeQuery Query Error ^^^^^ \n ${err}`);
    return false;
  } finally {
    connection.release()
  }

} catch (err) {
  console.error (` ##### updateTodoByTypeParams DB Error ^^^^^ \n ${err} `)
  return false;
}

}

exports.deleteTodo = async function(userIdx, todoIdx) {
  try {

    //DB 연결 검사

    const connection = await pool.getConnection(async (conn) => conn);
    
    //쿼리
    try {
      //status가 D로 처리해야 삭제되는것임
      const deleteTodoQuery = 
      "update Todos set status = 'D' where userIdx = ? and todoIdx = ?;";

      const deleteTodoParams = [userIdx, todoIdx];

      const [row] = await connection.query(deleteTodoQuery, deleteTodoParams)

      connection.release();
      return row;

    } catch(err) {
      console.error (` ##### deleteTodoByTypeQuery Query Error ^^^^^ \n ${err}`);
    return false;
  } finally {
    connection.release()
  }

} catch (err) {
  console.error (` ##### deleteTodoByTypeParams DB Error ^^^^^ \n ${err} `)
  return false;
}

}