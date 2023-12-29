import React, { useState } from 'react';
import { StyledButton, StyledForm, StyledInput } from './SearchForm.styled';


const SearchForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    handleSubmit(query);
    setQuery('');
  };

  return (
    <StyledForm onSubmit={onHandleSubmit}>
      <StyledInput
        name="movie"
        required
        value={query}
        onChange={handleChange}
      />
      <StyledButton type="submit">Search Movie</StyledButton>
    </StyledForm>
  );
};

export default SearchForm;
