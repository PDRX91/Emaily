import React, {Component} from 'react';
import _ from 'lodash';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';

const FIELDS = [
	{label: 'Survey Title', name: 'title'},
	{label: 'Subject Line', name: 'subject'},
	{label: 'Email Body', name: 'body'},
	{label: 'Recipients', name: 'emails'}
];
class SurveyForm extends Component {
	renderFields() {
		return _.map(FIELDS, ({label, name}) => {
			return <Field key={name} component={SurveyField} type="text" label={label} name={name} />;
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit((values) => console.log(values))}>
					{this.renderFields()}
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
						<i className="material-icons right">close</i>
					</Link>
					<button type="submit" className="teal btn-flat right white-text">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'surveyForm'
})(SurveyForm);