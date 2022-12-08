import {Avatar, Grid, Stack} from '@mui/material';
import {PrincipalInformation} from '../../components/PrincipalInformation/index.jsx';
import {Description} from '../Description/index.jsx';

const UserCard = ({userState}) => {
	const {avatar_url, login} = userState;
	
	return (
		<Grid container sx={{marginTop: '15px'}}>
			<Grid item xs={3}>
				<Avatar alt={login} src={avatar_url} sx={{width: '100%', height: 'auto'}}/>
			</Grid>
			<Grid item xs={9}>
				<Stack direction="column" spacing={1} sx={{margin: '32px'}}>
					<PrincipalInformation userState={userState}/>
					<Description userState={userState}/>
				</Stack>
			</Grid>
		</Grid>
	);
	
};

export {UserCard};