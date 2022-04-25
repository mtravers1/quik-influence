import { SearchPageLoader } from 'components/SkeletonLoaders'
import LeadsDataPoint from 'modules/Leads/LeadsDataPoint'
import React from 'react'

const SearchResults = ({
    leads,
    loading
}: {
    leads: any,
    loading: boolean
}) => {
     
    return loading ?
        <SearchPageLoader />
        :
        <LeadsDataPoint
            totalCount={leads?.meta?.totalCount}
            filteredCount={leads?.meta?.filteredCount}
            malecount={leads?.meta?.malecount}
            femalecount={leads?.meta?.femalecount}
        />
}


export default SearchResults