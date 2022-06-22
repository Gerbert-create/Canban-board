import React from 'react'


export default class BaclogBlock extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			text: 'Add card',
			value: '',
			saveArray: [],
			disabled: false
		}

		this.HandleChange = this.HandleChange.bind(this)
		this.HandleClick = this.HandleClick.bind(this)
		this.OnBlur = this.OnBlur.bind(this)
	}

	static getDerivedStateFromProps() {
		const saveValue = JSON.parse(localStorage.getItem('content'))
		if (localStorage.length > 0) {
			return {
				saveArray: saveValue
			}
		}
	}

	OnBlur() {
		this.setState({ text: 'Add card' })
	}


	HandleChange(e) {
		this.setState({ value: e.target.value })
		this.setState({ disabled: false })
	}

	HandleClick() {
		if (this.state.text === 'Submit') {
			let newArr = this.state.saveArray
			newArr.push(this.state.value)
			console.log(newArr)
			localStorage.setItem('content', JSON.stringify(newArr))
			this.setState({ text: 'Add card' })


		} else {
			this.setState({ text: 'Submit' })
			const btn = document.querySelector('.backlog_button')
			btn.style.cssText = `
				background-color: rgba(0, 121, 191, 1);
				color: white;
				border-radius: 5px;
			`
			this.setState({ disabled: true })
		}
	}


	render() {

		return (
			<div className='backlog_mainBlock'>
				<h5 className='backlog_Title'>Backlog</h5>

				<div className='backlog_contentBlock'>

					<ul>

						{this.state.saveArray.map((item, index) => (

							<div id={index} className='backlog_Item'>{item}</div>

						))}

					</ul>


					{this.state.text === 'Submit'
						? <textarea className='backlog_textarea' cols='258px' rows='35px' type='text' onChange={this.HandleChange}></textarea>
						: ''
					}

					<button disabled={this.state.disabled} className='backlog_button' onClick={this.HandleClick}>{this.state.text}</button>
				</div>
			</div>
		)
	}
}

