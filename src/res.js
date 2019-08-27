'use strict';
module.exports = {
    ok: function (values, res){
        var data ={
            status: '200',
            values: values
        }
        res.json(data);
        res.end();
    },
    dataManipulation: (res, statuscode, message, values) =>{
        return res.json({
            status: statuscode,
            message: message,
            data: values
        })
    }
}