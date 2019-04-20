import React from "react";
import "./App.scss";

import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";


class App extends React.Component {	
	state = {
		name: { value: '', valid: false },
		email: { value: '', valid: false },
		password: { value: '', valid: false },
		gender: { value: null, valid: false },
		role: { value: null, valid: false },
		terms: { isChecked: false },

		isValid: false,
		showResult: null,
		submitText: '',
		submitIcon: ''
	}	


	handleInput = (input, e) => {
		let value = e.target.value;
		this.setState({ [input]: { value } })

		!value
			? this.setState({ [input]: { valid: false } })
			: this.setState({ [input]: { valid: true } })
	};


	handleSelect = (select, e) => {
		let value = e.target.selectedIndex !== 0 
			? e.target.options[e.target.selectedIndex].value 
			: null;

		!value 
			? this.setState({ [select]: { valid: false } } ) 
			: this.setState({ [select]: { valid: true } })		
	};


	handleCheck = (check, e) => {	
		let isCheck = e.target.checked ? true : null;
		isCheck != null 
			? this.setState({ [check]: { isChecked: true } } ) 
			: this.setState({ [check]: { isChecked: false } })
	};


	handleSubmit = e => {
		e.preventDefault();
		if ( this.state.name.valid && this.state.email.valid &&
			this.state.password.valid && this.state.gender.valid &&
			this.state.role.valid && this.state.terms.isChecked ) {

			this.setState({
				isValid: true,
				submitIcon: '✔️',
				submitText: 'SUCCESS: Your form is fine.',
				showResult: true
			})
								
		} else {
			this.setState({
				isValid: false,
				submitIcon: '❌',
				submitText: 'ERROR: Your form is wrong.',
				showResult: true
			})		
		}			
	};


	render() {	

		let resultClass = this.state.showResult && this.state.isValid
			? 'form__result form__result--success' 
			: 'form__result form__result--error';

		return (
			<div className="page-wrap">
				<div className="mobile">
					<span className='mobile__icons' role="img" aria-label='icons'>📄✏️</span>
					<h2 className="mobile__title">Sign Up</h2>
					<p className="mobile__subtitle">Create a new account</p>

					<form className="form">	
						<Input 
							placeholder='Full name'
							errorClass={ !this.state.name.valid ? 'c-input--error' : ''}
							extraClass='margin-bottom-10'
							onKeyUp={(e) => this.handleInput('name', e)} />
						
						<Input 
							type='email' 
							placeholder='E-mail address'
							errorClass={ !this.state.email.valid ? 'c-input--error' : ''}
							extraClass='margin-bottom-10'
							onKeyUp={(e) => this.handleInput('email', e)} />
						
						<Input 
							type='password' 
							placeholder='Password'
							errorClass={ !this.state.password.valid ? 'c-input--error' : ''}
							extraClass='margin-bottom-10'
							onKeyUp={(e) => this.handleInput('password', e)} />	

						<Select 
							extraClass='margin-bottom-10'
							initial='Gender' 
							options={['Women', 'Man', 'Indeterminate']} 
							errorClass={ !this.state.gender.valid ? 'c-select--error' : ''}
							onChange={(e) => this.handleSelect('gender', e)} />	

						<Select 
							extraClass='margin-bottom-10'
							initial='Role' 
							options={['Frontend', 'Backend', 'QA']} 
							errorClass={ !this.state.role.valid ? 'c-select--error' : ''}
							onChange={(e) => this.handleSelect('role', e)} />					

						<Checkbox
							id='terms'
							text='Accept conditions'
							extraClass='margin-bottom-30'
							errorClass={!this.state.terms.isChecked ? 'c-checkbox--error' : ''}	
							onChange={(e) => this.handleCheck('terms', e) } />	

						{this.state.showResult &&
							<div className={resultClass} >
								<span className='form__result__icon'>{this.state.submitIcon}</span>
								{this.state.submitText}
							</div>
						}

						<Button 
							text='Sign Up'
							onClick={(e) => this.handleSubmit (e)} />  
					</form>
				</div>
			</div>
		);
	}
}

export default App;