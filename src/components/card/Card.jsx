const Card = ({ title, name, username, email, profileImage }) => {
	return (
		<>
			<p>{title}</p>
			<p>{name}</p>
			<p>{username}</p>
			<p>{email}</p>
			<img src={profileImage} alt='' />
		</>
	);
};
export default Card;
