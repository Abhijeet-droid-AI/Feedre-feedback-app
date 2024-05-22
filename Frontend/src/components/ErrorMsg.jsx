import {Typography} from '@mui/material';

// eslint-disable-next-line react/prop-types
const ErrorMsg = ({msg}) => {
	return (
		<div>
			<Typography variant="p" color="red" align="center">
				{msg}
			</Typography>
		</div>
	);
};

export default ErrorMsg;
