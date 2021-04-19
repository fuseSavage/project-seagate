
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root11549",
    database: "demoautodb",
})

app.get('/demoauto', (req, res) => {
    db.query("SELECT * FROM sql_for_auto_web_07113", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get('/select', (req, res) => {
    const exp_id = req.query.EXP_ID;
    // console.log(exp_id)
    db.query(`SELECT EXP_ID,HGA_QTY,BLD_INTENT_AUTHOR,BLD_INTENT_TEAM,WAF_EXP_CODE_DESCR,WAF_EXP_CODE,WAF_CODE FROM sql_for_auto_web_07113 WHERE EXP_ID = "${exp_id}"`,
        (err, result) => {
            if (err)  {
                console.log(err);
            } else {
                res.send(result);
            }
        })

       
})

app.listen('3001', () => {
    console.log('server is running on port 3001');
})