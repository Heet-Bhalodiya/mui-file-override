import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

function Cards() {
    return (
        <>
            <Card sx={{ mt: 6 }}>
                <CardContent>
                    <div>
                        <Typography color="text.secondary" sx={{ mb: 1 }} >
                            Use color prop and variant contained with Button component for different colored buttons.
                        </Typography>
                        <Button variant="contained" sx={{ mr: 2 }} color='primary'>primary</Button>
                        <Button variant="contained" sx={{ mr: 2 }} color='secondary'>secondary</Button>
                        <Button variant="contained" sx={{ mr: 2 }} color='success'>success</Button>
                        <Button variant="contained" sx={{ mr: 2 }} color='error'>error</Button>
                        <Button variant="contained" sx={{ mr: 2 }} color='warning'>warning</Button>
                        <Button variant="contained" sx={{ mr: 2 }} color='info'>info</Button>
                    </div>
                    <Box sx={{ mt: 2 }}>
                        <Typography color="text.secondary" >
                            Use color prop and variant outlined with Button component for different colored buttons.
                        </Typography>
                        <Button variant="outlined" sx={{ mr: 2 }} color='primary'>primary</Button>
                        <Button variant="outlined" sx={{ mr: 2 }} color='secondary'>secondary</Button>
                        <Button variant="outlined" sx={{ mr: 2 }} color='success'>success</Button>
                        <Button variant="outlined" sx={{ mr: 2 }} color='error'>error</Button>
                        <Button variant="outlined" sx={{ mr: 2 }} color='warning'>warning</Button>
                        <Button variant="outlined" sx={{ mr: 2 }} color='info'>info</Button>
                    </Box>
                </CardContent>
                <CardActions sx={{ ml: 2 }}>
                    <Button size="small" >Learn More</Button>
                </CardActions>
            </Card>

            <Card sx={{ mt: 6 }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h1" gutterBottom>
                        h1. Heading
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        h2. Heading
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        h3. Heading
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        h4. Heading
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        h5. Heading
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        h6. Heading
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                    <Typography variant="button" display="block" gutterBottom>
                        button text
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        caption text
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        overline text
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ mt: 6, mb: 4 }}>
                <CardContent>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item md={8} xs={6}>
                                <Item>md=8</Item>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Item>md=4</Item>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <Item>md=4</Item>
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <Item>md=8</Item>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </>

    );
}

export default Cards;
