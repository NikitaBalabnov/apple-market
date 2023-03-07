import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { FC } from 'react';
type Props = {
  ProductType: string;
  setProductType: (value: string) => void;
};
const MySelect: FC<Props> = ({ ProductType, setProductType }) => {
  return (
    <Box component={'div'} sx={{ minWidth: '195px' }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Sorting Device</InputLabel>
        <Select
          className="MySelect"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Choose device"
          onChange={(e) => setProductType(e.target.value)}
          value={ProductType}>
          <MenuItem value={''}>No Sorting</MenuItem>
          <MenuItem value={'Mac'}>MacBook</MenuItem>
          <MenuItem value={'iPhone'}>iPhone</MenuItem>
          <MenuItem value={'iPad'}>iPad</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MySelect;
