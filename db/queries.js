const pool = require('./pool');

async function getAllMessages(){
  const { rows } = await pool.query('SELECT * FROM messages');
//   console.log(rows);
  return rows;
}

async function getMessageById(id){
  const { rows } = await pool.query('SELECT * FROM messages WHERE id=($1);', [id]);
//   console.log(rows);
  return rows;
}

async function insertMessage(data,username){
  await pool.query(
    `INSERT INTO messages (data, username) 
     VALUES
      ($1, $2);
    `, [data, username])
}


module.exports = {
  getAllMessages,
  insertMessage,
  getMessageById
}