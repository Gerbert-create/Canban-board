import UserLogo from './userLogo'
import './header.css'

function Header () {
	return (
		<header>
	 		<h1>Awesome Kanban Board</h1>
			<UserLogo/>
		</header>
	)
}

export default(Header)