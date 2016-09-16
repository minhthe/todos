import {template} from 'meteor/templating';

import {Tasks} from '../api/tasks.js';
import './body.html';

// Template.body.helpers({
// 	tasks: [
// 	{text: 'this is task 1'},
// 	{text: 'this is task 2'},
// 	{text: 'this is task 3'}
// 	],});
Template.body.helpers({
	tasks(){
		return Tasks.find({});
	},
});
