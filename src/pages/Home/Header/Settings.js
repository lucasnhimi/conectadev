import React, { useRef, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { MoreVertical } from 'react-feather';
import { useSettings } from '../../../context/SettingsContext';

function Settings() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const { settings, saveSettings } = useSettings();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = () => {
    saveSettings({ darkMode: !settings.darkMode });
  };

  return (
    <>
      <IconButton ref={ref} onClick={handleOpen}>
        <MoreVertical />
      </IconButton>
      <Popover
        onClose={handleClose}
        open={isOpen}
        anchorEl={ref.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box p={3}>
          <Typography variant="h6" color="textPrimary">
            Configurações
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={settings.darkMode}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Tema escuro"
          />
        </Box>
      </Popover>
    </>
  );
}

export default Settings;
