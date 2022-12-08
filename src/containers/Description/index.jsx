import {Stack, Typography} from '@mui/material';
import {PaperInformation} from '../../components/PaperInformation/index.jsx';
import {LocatedInformation} from '../../components/LocatedInformation/index.jsx';

const Description = ({userState}) => {
	const {bio} = userState;
	return (
		<>
			<Stack sx={{justifyContent: 'center'}}>
				{
					bio !== null
						? <Typography variant="body1">{bio}</Typography>
						: <Typography variant="body1">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores delectus dignissimos
							nihil perspiciatis ullam. Earum est in iste labore laborum magnam minima nam obcaecati quibusdam
							reprehenderit! Necessitatibus placeat, suscipit.
						</Typography>
				}
			</Stack>
			<PaperInformation userState={userState}/>
			<LocatedInformation userState={userState}/>
		</>
	);
};

export {Description};