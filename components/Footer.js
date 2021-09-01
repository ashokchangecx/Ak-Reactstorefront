import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.primary"
        color="white"
      
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box><h3>SHOP BY CATEGORY</h3></Box>
              <Box>
                <Link href="/" color="inherit">
                Womens
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Mens
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Kids
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Brands
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Shoes
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Departments
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Clearance
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box><h3>CREDIT & PAYMENT</h3></Box>
              <Box>
                <Link href="/" color="inherit">
                Make a Payment
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Check My Balance
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                About Masseys Credit
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Credit Terms
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Apply for Credit
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box><h3>CUSTOMER SERVICE</h3></Box>
              <Box>
                <Link href="/" color="inherit">
                Order Status
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Order History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                FAQs
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Shipping Info
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Return Policy
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Wishlist
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Site Map
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Size Chart
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Contact Us
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Accessibility
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box><h3>OUR COMPANY</h3></Box>
              <Box>
                <Link href="/" color="inherit">
                About Us
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Catalog Request
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Online Catalog
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Privacy policy
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                Terms of Use
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                COVID-19 Update
                </Link>
              </Box>
              </Grid>
          </Grid>
          {/* <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            React &reg; {new Date().getFullYear()}
          </Box> */}
        </Container>
      </Box>
    </footer>
  );
}
