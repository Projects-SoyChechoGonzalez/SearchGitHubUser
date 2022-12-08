import {Paper, Stack, Typography} from '@mui/material';

const PaperInformation = ({userState}) => {
	const {public_repos, followers, following} = userState;
	return (
		<>
			<Paper elevation={3}>
				<Stack direction="row" spacing={3} sx={{justifyContent: 'space-evenly', margin: '24px'}}>
					<Stack>
						<Typography variant="h5">Repos</Typography>
						<Typography variant="h6">{public_repos}</Typography>
					</Stack>
					<Stack>
						<Typography variant="h5">Followers</Typography>
						<Typography variant="h6">{followers}</Typography>
					</Stack>
					<Stack>
						<Typography variant="h5">Following</Typography>
						<Typography variant="h6">{following}</Typography>
					</Stack>
				</Stack>
			</Paper>
		</>
	);
};

export {PaperInformation};