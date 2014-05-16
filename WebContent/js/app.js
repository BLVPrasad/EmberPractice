/*if (typeof Hexaware == "undefined" || !Hexaware) {
	var Hexaware = {};
}*/

Innovation = Ember.Application.create({
	LOG_TRANSITIONS: true
});

Innovation.Router.map(function () {
	this.route("innovation", {
		path: "/"
	});
	this.resource('team', {
		path: '/team/:team_id'
	});
});

Innovation.Store = DS.Store.extend({
	revision: 12,
	adapter: 'DS.FixtureAdapter'
});

Innovation.Team = DS.Model.extend({
	name: DS.attr('string'),
	members: DS.attr('string')
})

Innovation.InnovationRoute = Ember.Route.extend({
	model: function () {
		return ['EBIII F3 3rd Floor', 'SIPCOT IT PARK', 'Siruseri']

	},
	setupController: function (controller, model) {
		controller.set('info', model)
		controller.set('teams', Innovation.Team.find());
	}
});

Innovation.Team.FIXTURES = [{
		id: 1,
		name: 'Innovation Lab COE',
		members: 'Immanuel, Sunitha, Manohar, Sukumar, Ravindran'
	}, {
		id: 2,
		name: 'JAVA COE',
		members: 'Sridharan, Senthil'
	}, {
		id: 3,
		name: 'Mobility',
		members: 'Jacob, karthik'
	}, {
		id: 4,
		name: 'SAP Delivery',
		members: 'Sabira, Gowtham'
	}, {
		id: 5,
		name: 'Dot Net',
		members: 'Prasanna, Mathangi'
	}];