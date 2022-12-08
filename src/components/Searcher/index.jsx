import {IconButton, Stack, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';

const Searcher = (props) => {
	
	const {setInputUser} = props;
	
	const [valueInput, setValueInput] = useState('');
	
	const onSearchValueChange = (event) => {
		const inputValue = event.target.value;
		setValueInput(inputValue);
	};
	
	const handleSubmit = () => {
		setInputUser(valueInput);
	};
	
	return (
		<Stack direction="row" sx={{marginTop: '30px', width: '80%'}}>
			<TextField id="outlined-basic" label="GitHub User" variant="outlined" placeholder="Buscar usuario en GitHub"
			           size="small" value={valueInput} onChange={onSearchValueChange}
			           sx={{width: '90%'}}/>
			<IconButton size="small" sx={{left: '-45px'}} onClick={handleSubmit}>
				<SearchIcon/>
			</IconButton>
		</Stack>
	);
};

export {Searcher};
