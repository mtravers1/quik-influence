import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { updateStates } from 'redux/actions/general';
// import axios from 'axios';
import { stateNamesObj } from 'utils/constants/stateConstants';

export const useSelectLocations = (selectedCountry: string) => {
  const { countryData } = useSelector((state: any) => state.generals);

  // const dispatch = useDispatch();
  const [loadingStates, setLoadingStates] = useState(false);

  // useEffect(() => {
  //   if (!selectedCountry) return;
  //   if (!countryData.apiToken) return;
  //   if (countryData.state[selectedCountry]) return;

  //   const get_states = async () => {
  //     setLoadingStates(true);

  //     const stateArr: any = await axios.get(
  //       `https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`,
  //       {
  //         headers: {
  //           'X-CSCAPI-KEY': countryData.apiToken,
  //           'content-type': 'application/json',
  //         },
  //       }
  //     );

  //     setLoadingStates(false);

  //     const states = stateArr.data.map((state: any) => ({
  //       label: state.name,
  //       value: state.iso2,
  //     }));

  //     dispatch(updateStates(selectedCountry, states));
  //   };

  //   get_states();

  //   return () => {};
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedCountry]);

  return {
    internalSelectOptions: {
      ...countryData,
      state: stateNamesObj,
    },
    loadingStates,
  };
};
