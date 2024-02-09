import ProductCard from "../../componenets/@commonComponent/card";
import Grid from "@mui/material/Grid";

const MostViwedProducts = () => {
  return (
    <div className="viwed_prducts">
      <div className="title">
        Most Viwed <span>Products</span>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        spacing={2}
      >
        {Array.from({ length: 10 }, () => (
          <Grid item xs={12} sm={6} md={3} lg={3}>
              <ProductCard/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MostViwedProducts;
