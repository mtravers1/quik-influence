import { Box } from '@chakra-ui/layout';
import CustomButton from 'components/Button';
import CompanyCard from 'components/CompanyCard';
import DropdownSelect from 'components/DropdownSelect';
import Filter from 'components/Filter';
import { TextInput } from 'components/Input';
import { useState } from 'react';

const DashboardOverview = () => {
  const [value, setValue] = useState('')
  const handleChange = (event: any) => setValue(event.target.value)
  const handleDropdownChange = (event: any) => {
    console.log(event.target.value)
  }
  const selectOptions = [
    {
      label: 'test',
      value: 'test'
    },
    {
      label: 'atest',
      value: 'atest'
    },
    {
      label: 'btest',
      value: 'btest'
    }
  ]
  return (
    <Box>
      <Box width="275px" m={10}>
        <CompanyCard
          companyName="Microphone Company"
          users={29}
          leads={223}
          revenue={90}
        />

        <br />
        <CustomButton>Send Contact </CustomButton>
        <br />
        <br />
        <CustomButton variant="outline">Send Contact </CustomButton>
        <br />
        <br />
        <CustomButton variant="gray">Send Contact </CustomButton>
        <br />
        <br />
        <Filter />
        <br />
        <br />
        <br />
        <TextInput
          value={value}
          handleChange={handleChange}
          type='email' placeholder='Email'
          TextInputProps={{
          }}
        />
        <br />

        <TextInput
          value={value}
          handleChange={handleChange}
          type='email' placeholder='Email'
          TextInputProps={{
          }}
          label="POC"
        />
        <br />

        <TextInput
          value={value}
          handleChange={handleChange}
          type='email' placeholder='Email'
          TextInputProps={{
          }}
          label="POC"
          error="Invalid email"
        />
        <br />
        <DropdownSelect
          onChange={handleDropdownChange}
          label="Payout Model"
          labelProps={{
            fontSize:'1.2rem'
          }}
          options={selectOptions || []} />
        
          <br />
          <DropdownSelect
            onChange={handleDropdownChange} 
            selectProps={{
              height:'4rem',
              fontSize: '1.4rem'
            }}
            options={selectOptions || []} />
            <br />
            <DropdownSelect
              onChange={handleDropdownChange} 
              selectProps={{
                height:'4rem',
                fontSize: '1.4rem'
              }}
              error="select one to proceed"
              options={selectOptions || []} />
  

      </Box>
    </Box>
  );
};

export default DashboardOverview;
