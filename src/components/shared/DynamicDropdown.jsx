import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete,
{ createFilterOptions } from '@material-ui/lab/Autocomplete';
const filter = createFilterOptions();

const DynamicDropdown = (props) => {

  const { setOptions, options, setEventType, value } = props;
  const [val, setVal] = useState(value ? value : null);

  const onChangeHandler = (event, values) => {
    if (values === null || values === '') return;
    if (values.includes('Add')) {
      values = values.split('Add ')[1];
    }
    setOptions([...options, values]);
    setEventType(values);
    setVal(values);
  }

  return (
    <div style={{ width: '195px' }}>
      <Autocomplete
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '' && filtered.length === 0) {
            filtered.push(`Add ${params.inputValue}`);
          }
          return filtered;
        }}
        onChange={onChangeHandler}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={options}
        renderOption={(option) => option}
        autoSelect
        style={{ width: 300 }}
        freeSolo
        defaultValue={val}
        //inputValue={val}
        value={val}
        renderInput={(params) => (
          <TextField {...params} label="Categories"
            variant="outlined" />
        )}
      />
    </div>
  );
}

export default DynamicDropdown