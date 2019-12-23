import React from 'react';
import { FilterContainer, FilterTitle } from './styled';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { FieldBlock } from './styled';

export default () => {

  return (
    <FilterContainer>
      <FilterTitle>Filter</FilterTitle>
      <FieldBlock className="d-flex align-items-end">
        <TextField id="standard-secondary" label="Search.." color="secondary" />
        <Button variant="contained" color="primary" style={{ marginLeft: 10, padding: 10, minWidth: 45 }}>
          <SearchIcon />
        </Button>
      </FieldBlock>
    </FilterContainer>
  );
}
