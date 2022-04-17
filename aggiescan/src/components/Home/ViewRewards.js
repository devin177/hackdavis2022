import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ContainedButtons() {
  return (
    <Stack spacing={2} direction="row">
    <Button variant="contained" size="large"> View Rewards</Button>
    </Stack>
  );
}
