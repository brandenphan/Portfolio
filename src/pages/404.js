import * as React from "react"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"
import { Grid, Typography, Button } from "@mui/material"
import { navigate } from "gatsby"
import "@fontsource/source-sans-pro";
import CloseIcon from '@mui/icons-material/Close';

const NotFoundPage = () => {
    const [width, setWindowWidth] = React.useState(0);
    const updateDimensions = () => {
        setWindowWidth(window.innerWidth);
    }
    React.useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    return (
		<Layout>
			<div style={{minHeight: "100vh"}}>
				<NavBar />

				{width > 0 && (
					<>
						{width > 700 ? (<Grid item xs={12}><br /><br /><br /><br /><br /><br /><br /><br /></Grid>) : (<Grid item xs={12}><br /><br /><br /><br /><br /><br /></Grid>)}

						<Grid container sx={{position: "absolute", top: "35vh"}}>
							<Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
								<CloseIcon sx={{fontSize: "100px", color: "#E60268"}} />
							</Grid>
							<Grid item xs={12}>
								<br />
							</Grid>
							<Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
								<Typography variant="h5" sx={{fontFamily: "Source Sans Pro"}}>Sorry this page does not exist!</Typography>
							</Grid>
							<Grid item xs={12}><br /></Grid>
							<Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
								<Button onClick={() => {navigate("/")}} sx={{color: "#3672FF", fontFamily: "Source Sans Pro", fontSize: "18px"}}><b>Back to Home Page</b></Button>
							</Grid>
						</Grid>
					</>
				)}
				

			</div>
		</Layout>
    )
}

export default NotFoundPage
