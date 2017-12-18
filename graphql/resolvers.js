const { findAssociate, listAll, createAssociate, setNewSchedule } = require( "../db/modules/associate-controller");

const resolverMap = {
   Query: {
		getAssociateData(obj, args, context) {
			return findAssociate(args.associateName).then(res => res).catch(err => new Error("Associate not found."));
		},
		getAssociatesList() {
			return listAll().then(res => res);
		}
	 },
	Mutation: {
		createAssociate(_, data) {
			return createAssociate(data.associate).then(res => res); 
		},
		setNewSchedule(_, data) {
			return setNewSchedule(data.associateName, data.schedule).then(res => res);
		}
	}
}

module.exports = resolverMap;
