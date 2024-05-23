import {
	Avatar,
	Typography,
	Card,
	CardActions,
	CardContent,
	Rating,
	Box,
} from '@mui/material';

// eslint-disable-next-line react/prop-types
const FeedbackCard = ({fullName, avatar, comments, type, ratings}) => {
	return (
		<Card
			variant="outlined"
			sx={{
				padding: '16px',
				bgcolor: 'background.paper',
				boxShadow: 3,
				borderRadius: 2,
			}}
		>
			<CardActions disableSpacing sx={{alignItems: 'center'}}>
				<Avatar src={avatar} sx={{width: 56, height: 56}} />
				<Typography variant="h6" sx={{ml: 2, fontWeight: 'bold'}}>
					{fullName}
				</Typography>
			</CardActions>
			<Box sx={{mt: 2, mb: 2}}>
				<Typography variant="h6" align="center" color="primary">
					{type} Feedback
				</Typography>
			</Box>
			<CardContent>
				<Typography variant="body1" sx={{mb: 2}}>
					{comments}
				</Typography>
				{ratings && (
					<Box display="flex" justifyContent="center" mt={2}>
						<Rating value={ratings} readOnly />
					</Box>
				)}
			</CardContent>
		</Card>
	);
};

export default FeedbackCard;
