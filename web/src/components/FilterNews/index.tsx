import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { FieldBlock, FilterContainer, FilterTitle } from './styled';

export default () => {
  const [state, setState] = React.useState({
    unseen: true,
    seen: true,
  });

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FilterContainer>
      <FormGroup>
        <FilterTitle>Фильтр</FilterTitle>
        <FieldBlock className="d-flex align-items-end">
          <TextField id="standard-secondary" label="Search.." color="secondary" />
          <Button variant="contained" color="primary" style={{ marginLeft: 10, padding: 10, minWidth: 45 }}>
            <SearchIcon />
          </Button>
        </FieldBlock>
        <FieldBlock>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.seen}
                  onChange={handleChange('seen')}
                  value="seen"
                  color="primary"
                />
              }
              label="Просмотренные"
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.unseen}
                  onChange={handleChange('unseen')}
                  value="unseen"
                  color="primary"
                />
              }
              label="Не просмотренные"
            />
          </div>
        </FieldBlock>
      </FormGroup>
    </FilterContainer>
  );
}
