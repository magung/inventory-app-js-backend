'use strict';
module.exports = {
    getDataResponse: (res, statuscode, values, totalvalues, page, message) => {
        return res.json({
          status: statuscode,
          data: values,
          total: totalvalues,
          page: page,
          message: message
        })
      },
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