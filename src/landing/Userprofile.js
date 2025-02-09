import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Divider, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProfileStatistics = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get('http://localhost/breif-6-1-1/api-talal&rand/user/index') // Update with your actual API endpoint
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <section style={{ backgroundColor: '#f4f5f7' }}>
      <Container className="py-5" sx={{ height: '100vh' }}>
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
          <Grid item md={6} mb={4} mb-lg={0}>
            <Card sx={{ borderRadius: '.5rem' }}>
              <Grid container>
                <Grid
                  item
                  md={2}
                  className="gradient-custom text-center text-white"
                  sx={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}
                >
                  <Typography>Web Designer</Typography>
                  {users.map(user => (
                    <IconButton
                      key={user.id}
                      size="small"
                      component={Link}
                      to={`/UserEdit/${user.id}`}
                    >
                      <Edit />
                    </IconButton>
                  ))}
                </Grid>
                <Grid item md={8}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h6">Information</Typography>
                    <Divider sx={{ mt: 0, mb: 4 }} />
                    <Grid container pt={1}>
                      {users.map(user => (
                        <React.Fragment key={user.id}>
                          <Grid item xs={6} mb={3}>
                            <Typography variant="h6">Name</Typography>
                            <Typography color="textSecondary">{user.name}</Typography>
                          </Grid>
                          <Grid item xs={6} mb={3}>
                            <Typography variant="h6">Email</Typography>
                            <Typography color="textSecondary">{user.email}</Typography>
                          </Grid>
                          <Grid item xs={9} mb={3}>
                            <Typography variant="h6">Phone</Typography>
                            <Typography color="textSecondary">{user.mobile}</Typography>
                          </Grid>
                        </React.Fragment>
                      ))}
                    </Grid>
                    <Grid container pt={1}>
                      {users.map(user => (
                        <React.Fragment key={user.id}>
                          <Grid item xs={6} mb={3}>
                            <Typography variant="h6">Age</Typography>
                            <Typography color="textSecondary">{user.age}</Typography>
                          </Grid>
                          <Grid item xs={6} mb={3}>
                            <Typography variant="h6">Address</Typography>
                            <Typography color="textSecondary">{user.address}</Typography>
                          </Grid>
                        </React.Fragment>
                      ))}
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProfileStatistics;
