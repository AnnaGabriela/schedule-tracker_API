const Associate = require('./associate-model');

function listAll() {
    return Associate.find().then(associates => associates).catch(err => err);    
}

function findAssociate(associateName) {
    return Associate.findOne({name : associateName}).then(associate => associate).catch(err => err);
}

function createAssociate(associate) {
    const newAssociate = new Associate(associate);
    return newAssociate.save().then(createdObj => createdObj);
}

function removeAssociate(associateName) {
    return Associate.remove({ name: associateName }).then(res => res).catch(err => err);
}

function setNewSchedule(associateName, schedule) {
    return Associate.update({ name : associateName },{ $push : { scheduleHistory: schedule } }).then(res => {
        if(res.nModified == 0) throw new Error("Associate not found.");
        return "OK";
    }).catch(err => err);
}

module.exports = { 
    listAll,
    findAssociate,
    createAssociate,
    removeAssociate,
    setNewSchedule
}