const {RegModel} = require("..//model/model");


const readReg = (req, res, next) => {
    let _query = {};
    if (Object.keys(req.query).length) {
      _query = req.query;
      if (_query.active) _query.active = _query.active === "true" ? true : false;
    }
    RegModel.find(_query, (err, candi) => {
      if (err) {
        console.log(err);
        res.status(503).send(err);
      } else {
        res.send(candi);
      }
    });
  };
  
  const addReg = (req, res, next) => {
    const Reg = new RegModel(req.body);
    Reg.save((err, Candi) => {
      if (err) {
        console.log(err);
        res.status(503).send(err);
      } else {
        res.send(Candi);
      }
    });
  };
  
  const updateReg = (req, res, next) => {
    const id = req.params.id;
    RegModel.findByIdAndUpdate(id, req.body, (err, Candi) => {
      if (err) {
        console.log(err);
        res.status(503).send(err);
      } else {
        res.send(Candi);
      }
    });
  };
  
  const deleteReg = (req, res, next) => {
    const id = req.params.id;
    RegModel.findByIdAndUpdate(id, { active: false }, (err, Candi) => {
      if (err) {
        console.log(err);
        res.status(503).send(err);
      } else {
        res.send(Candi);
      }
    });
  };
  

  module.exports = {
    // Register
    readReg,
    addReg,
    updateReg,
    deleteReg,
  }  