import React from 'react'
import searchIcon from '$assets/icons/search.svg'

import { SearchWrapper } from './style'

const Search = () => {
	return (
		<SearchWrapper className="search">
			<img src={searchIcon} width={24} height={24} />
		</SearchWrapper>
	)
}

export default Search