import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {
	TableHead,
	Alert,
	Snackbar,
	MenuItem,
	InputLabel,
	FormControl,
	Select,
	TableContainer,
	Table,
	Typography,
	TableBody,
	Avatar,
	TableRow,
	Button,
	Box,
	Paper,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {downloadCSV, downloadExcel} from '../utils/downloadFeedbacks';
import {format} from 'timeago.js';

const StyledTableCell = styled(TableCell)(({theme}) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	'&:hover': {
		backgroundColor: theme.palette.action.selected,
	},
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const Dashboard = () => {
	const accessToken = useSelector((state) => state.currentUser?.accessToken);
	const [feedbacks, setFeedbacks] = useState([]);
	const [open, setOpen] = useState(false);
	const [sortBy, setSortBy] = useState('asc');
	const [sortOrder, setSortOrder] = useState('createdAt');

	const handleSortTypeChange = (event) => {
		setSortBy(event.target.value);
	};

	const handleSortOrderChange = (event) => {
		setSortOrder(event.target.value);
	};

	const deleteFeedback = async (id) => {
		await axios.delete(`http://localhost:3000/feedback/${id}`, {
			withCredentials: true,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		const updatedFeedbacks = feedbacks.filter(
			(feedback) => feedback._id !== id
		);
		setFeedbacks(updatedFeedbacks);
		setOpen(true);
		setTimeout(() => {
			setOpen(false);
		}, 5000);
		console.log('deleted successfully');
	};

	useEffect(() => {
		const getSortedFeedbacks = async () => {
			const res = await axios.get(
				`http://localhost:3000/dashboard/getallfeedbacks?sortBy=${sortBy}&sortOrder=${sortOrder}`,
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);
			setFeedbacks(res.data.data);
			console.log('admin feedbacks', res.data.data);
		};
		getSortedFeedbacks();
	}, [accessToken, sortBy, sortOrder]);

	const downloadCSVFile = () => {
		if (feedbacks) {
			downloadCSV(feedbacks);
		}
	};

	const downloadExcelFile = () => {
		if (feedbacks) {
			downloadExcel(feedbacks);
		}
	};

	return (
		<Box
			className="mt-28 flex flex-col w-full justify-center items-center"
			sx={{padding: {xs: 2, md: 5}}}
		>
			<Snackbar open={open} autoHideDuration={6000}>
				<Alert severity="success" variant="filled" sx={{width: '100%'}}>
					Feedback Deleted Successfully!!!
				</Alert>
			</Snackbar>
			<Typography variant="h4" component="h1" gutterBottom>
				Feedback Dashboard
			</Typography>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				gap={2}
				sx={{marginBottom: 3}}
			>
				<FormControl sx={{minWidth: 200}} size="small">
					<InputLabel id="sort-by-label">Sort By</InputLabel>
					<Select
						labelId="sort-by-label"
						id="sort-by-select"
						value={sortBy}
						label="Sort By"
						onChange={handleSortTypeChange}
					>
						<MenuItem value="createdAt">CreatedAt</MenuItem>
						<MenuItem value="type">Type</MenuItem>
						<MenuItem value="rating">Ratings</MenuItem>
					</Select>
				</FormControl>
				<FormControl sx={{minWidth: 200}} size="small">
					<InputLabel id="sort-order-label">Sort Order</InputLabel>
					<Select
						labelId="sort-order-label"
						id="sort-order-select"
						value={sortOrder}
						label="Sort Order"
						onChange={handleSortOrderChange}
					>
						<MenuItem value="asc">Increasing</MenuItem>
						<MenuItem value="desc">Decreasing</MenuItem>
					</Select>
				</FormControl>
				<Button
					variant="contained"
					color="primary"
					onClick={downloadCSVFile}
					sx={{height: 'fit-content', marginTop: 1}}
				>
					Export as CSV
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={downloadExcelFile}
					sx={{height: 'fit-content', marginTop: 1}}
				>
					Export as Excel
				</Button>
			</Box>

			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<StyledTableCell>Avatar</StyledTableCell>
							<StyledTableCell>Name</StyledTableCell>
							<StyledTableCell>Ratings</StyledTableCell>
							<StyledTableCell>Comments</StyledTableCell>
							<StyledTableCell>Type</StyledTableCell>
							<StyledTableCell>Submitted</StyledTableCell>
							<StyledTableCell>Action</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{feedbacks &&
							feedbacks.map((feedback, index) => (
								<StyledTableRow key={index}>
									<StyledTableCell>
										<Avatar src={feedback.avatar} />
									</StyledTableCell>
									<StyledTableCell>
										<Typography>
											{feedback.fullName}
										</Typography>
									</StyledTableCell>
									<StyledTableCell>
										<Typography>
											{feedback.rating}
										</Typography>
									</StyledTableCell>
									<StyledTableCell>
										<Typography>
											{feedback.comments}
										</Typography>
									</StyledTableCell>
									<StyledTableCell>
										<Typography>{feedback.type}</Typography>
									</StyledTableCell>
									<StyledTableCell>
										<Typography>
											{format(feedback.createdAt)}
										</Typography>
									</StyledTableCell>
									<StyledTableCell>
										<Button
											variant="contained"
											color="secondary"
											startIcon={<DeleteForeverIcon />}
											onClick={() =>
												deleteFeedback(feedback._id)
											}
										>
											Delete
										</Button>
									</StyledTableCell>
								</StyledTableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default Dashboard;
