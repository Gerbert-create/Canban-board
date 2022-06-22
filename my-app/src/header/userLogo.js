import React from 'react'

export default class UserLogo extends React.Component {
	/*constructor(props) {
		super(props)

		this.setState = {
			userClick: false
		}
	}*/


	render() {
		return (
			<div className='userProfile'>
				<div className='userFoto'>
					<img src='img/userFoto.png' alt='User Foto' width='26.2px' height='33.45px'/>
				</div>
				
				<div className='userFoto-pointer'>
					<img src='img\pointUserFoto.png' alt='pointer' width='12px' height='7.42px'/>
				</div>
			</div>
		)
	}
}

