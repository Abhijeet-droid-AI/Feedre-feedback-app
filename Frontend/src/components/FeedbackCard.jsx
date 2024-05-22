// import {Avatar, Typography, Card, CardContent} from '@mui/material';

// const FeedbackCard = ({fullName, avatar, comments, type, ratings}) => {
// 	return (
// 		<Card
// 			sx={{
// 				bgcolor: 'Background.paper',
// 				padding: '10px',
// 			}}
// 		>
// 			<div className=" flex gap-2">
// 				<Avatar src={avatar} />
// 				<Typography variant="h6">{fullName}</Typography>
// 			</div>
// 			<Typography variant="h6" align="center">
// 				<b> {type + ' Feedback'}</b>
// 			</Typography>
// 			<CardContent variant="p" align="center">
// 				{comments}
// 			</CardContent>
// 		</Card>
// 	);
// };

// export default FeedbackCard;
import {
	Avatar,
	Typography,
	Card,
	CardActions,
	CardContent,
	Rating,
} from '@mui/material';

// eslint-disable-next-line react/prop-types
const FeedbackCard = ({fullName, avatar, comments, type, ratings}) => {
	return (
		<Card variant="outlined" sx={{padding: '16px'}}>
			<CardActions disableSpacing>
				<Avatar src={avatar} />
				<Typography variant="subtitle1">{fullName}</Typography>
			</CardActions>
			<Typography variant="h6" align="center">
				<b>{type}</b> Feedback
			</Typography>
			<CardContent>
				<Typography variant="body1">{comments}</Typography>
				{ratings && <Rating value={ratings} readOnly />}
			</CardContent>
		</Card>
	);
};

export default FeedbackCard;
