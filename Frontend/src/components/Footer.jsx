import {Box, Grid, Paper, Container, Link, Typography} from '@mui/material';
import {BsGithub} from 'react-icons/bs';

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" mt={1}>
			{'Copyright © '}
			<Link href="">Feedre&nbsp;</Link>
			{new Date().getFullYear()}
		</Typography>
	);
}

function AboutDeveloper() {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				mt: 4,
			}}
		>
			<Typography
				variant="h5"
				component="h1"
				sx={{
					fontWeight: 'bold',
					textAlign: 'center',
					borderBottom: 2,
					pb: 1,
				}}
			>
				About Developer
			</Typography>
			<Box sx={{mt: 2, width: '100%'}}>
				<Grid
					container
					spacing={2}
					sx={{
						p: 2,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Grid item xs={12} sm={6} md={4}>
						<Paper
							elevation={3}
							sx={{
								':hover': {transform: 'scale(1.05)'},
								transition: 'all 0.2s ease-in-out',
								py: 3,
								px: 2,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								borderRadius: 2,
								textAlign: 'center',
							}}
						>
							<Typography
								variant="h6"
								sx={{fontWeight: 'bold', pb: 1}}
							>
								Abhijeet Dass
							</Typography>
							<Typography>Software Engineer</Typography>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									gap: 2,
									pt: 2,
								}}
							>
								<Link
									href="https://github.com/Abhijeet-droid-AI"
									sx={{
										color: 'inherit',
										textDecoration: 'none',
									}}
								>
									<BsGithub size={20} />
								</Link>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default function Footer() {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: {xs: 4, sm: 8},
				py: {xs: 8, sm: 10},
				textAlign: 'center',
			}}
		>
			<AboutDeveloper />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					gap: 2,
					pt: {xs: 4, sm: 8},
					width: '100%',
					borderTop: '1px solid',
					borderColor: 'divider',
					mt: 4,
					pb: 4,
				}}
			>
				<Link color="text.secondary" href="#">
					Privacy Policy
				</Link>
				<Typography display="inline" sx={{mx: 0.5, opacity: 0.5}}>
					&nbsp;•&nbsp;
				</Typography>
				<Link color="text.secondary" href="#">
					Terms of Service
				</Link>
			</Box>
			<Copyright />
		</Container>
	);
}
