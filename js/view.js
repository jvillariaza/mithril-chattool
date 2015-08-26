var app = app || {};

(function () {
    'use strict';

    app.view = function () {
    	return m('.main', [
			m('h1', 'To Do App'),
			m('input'),
			m('hr'),
			m('section', 'Hello'),
		]);
    };
})();
