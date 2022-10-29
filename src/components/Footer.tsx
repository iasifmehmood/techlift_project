import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Link from "@mui/material/Link";

//https://www.youtube.com/watch?v=HCsFwwolXZw

export default function Footer(): JSX.Element {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="grey"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} textAlign="center">
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Pages</Box>
              <Box>
                <Link href="/" color="inherit">
                  {" "}
                  Products{" "}
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  {" "}
                  Categories{" "}
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  {" "}
                  Contact{" "}
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Services</Box>
              <Box>
                <Link href="/" color="inherit">
                  {" "}
                  Contact{" "}
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  {" "}
                  Support{" "}
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  {" "}
                  Privacy{" "}
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Social Media</Box>
              <Box>
                <Link href="/" color="inherit">
                  {" "}
                  Facebook{" "}
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  {" "}
                  Instagran{" "}
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  {" "}
                  Twitter{" "}
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Sab One Dollar &reg; {new Date().getUTCFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
