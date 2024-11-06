import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

interface Props {
  onClick: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({ onClick, search, handleChange }) => {
  return (
    <div>
      <input value={search} onChange={ (e) => handleChange(e) }></input>
      <button onClick={ (e) => onClick(e) } />
    </div>
  )
}

export default Search
