import Stack from '@mui/material/Stack';

import { BootstrapButton, ColorButton } from "./style";

export default function CustomButton() {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained">Custom CSS</ColorButton>
      <BootstrapButton variant="contained" disableRipple>
        Bootstrap
      </BootstrapButton>
    </Stack>
  );
}