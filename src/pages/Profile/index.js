import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import AccountProfile from './AccountProfile';
import Posts from './Posts';
import Connections from './Connections';

function Profile() {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item md={4}>
          <AccountProfile />
        </Grid>
        <Grid item md={8}>
          <Tabs value={tab} onChange={handleChange}>
            <Tab label="Post" />
            <Tab label="Conexões" />
          </Tabs>
          <TabPanel value={tab} index={0}>
            <Posts />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Connections />
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
