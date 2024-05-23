import PropTypes from 'prop-types';
import {
	Avatar,
	Table,
	TableBody,
	TableContainer,
	TableCell,
	TableRow,
	Typography,
} from '@mui/material';
import {styled} from '@mui/system';
import {tableCellClasses} from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({theme}) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const AdminFeedbackCard = ({
	fullName = '',
	avatar = '',
	// comments = '',
	type = '',
	ratings = '',
}) => {
	return (
		<TableContainer>
			<Table>
				<TableBody>
					<TableRow>
						<StyledTableCell>
							<Avatar src={avatar} />
						</StyledTableCell>
						<StyledTableCell>
							<Typography>{fullName}</Typography>
						</StyledTableCell>
						<StyledTableCell>
							<Typography>{ratings}</Typography>
						</StyledTableCell>
						<StyledTableCell>
							<Typography>{type}</Typography>
						</StyledTableCell>
						{/* Uncomment if you want to include comments */}
						{/* <StyledTableCell>
              <Typography>{comments}</Typography>
            </StyledTableCell> */}
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

AdminFeedbackCard.propTypes = {
	fullName: PropTypes.string,
	avatar: PropTypes.string,
	comments: PropTypes.string,
	type: PropTypes.string,
	ratings: PropTypes.string,
};

export default AdminFeedbackCard;
