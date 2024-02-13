import { Card } from "@mui/material";
import ProductCard from "../../componenets/@commonComponent/card";
import Grid from "@mui/material/Grid";
import MultiActionAreaCard from "../../componenets/@commonComponent/metrailUiCard";

const MostViwedProducts = () => {
  return (
    <div className="viewed_categories">
      <Grid container columns={24} columnSpacing={4}>
        <Grid xl={6} md={6} className="side_card_feature_product">
          <div className="title">Feature Products</div>
          <Card>
            {Array.from({ length: 10 }, () => (
              <MultiActionAreaCard
                image="https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448752.jpg?w=360&t=st=1706793248~exp=1706793848~hmac=eee1df404e54b33a305c267705810308d9e28aa9bae21c0af7f3d657db1ba5d7"
                title="Lizard"
                content=" Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica"
              />
            ))}
          </Card>
        </Grid>
        <Grid item xl={18}>
          {" "}
          <div className="viwed_prducts">
            <div className="title">
              Most Viwed <span>Products</span>
            </div>
            <Grid container direction="row" spacing={2}>
              {Array.from({ length: 10 }, () => (
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <ProductCard />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MostViwedProducts;
