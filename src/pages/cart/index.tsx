import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import "./style.scss";
import CustomButton from "../../componenets/@commonComponent/custombtn";

const data = [
  {
    image:
      "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?w=360&t=st=1707120712~exp=1707121312~hmac=df60971a6a67dae1382b062ccf2de6152bdac9f013f474bb80d339efe3a2dd58",
    productName: "T-Fast-sigs",
    Brand: "Luxicery",
    quantity: "2",
    price: "230$",
  },
  {
    image:
      "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?w=360&t=st=1707120712~exp=1707121312~hmac=df60971a6a67dae1382b062ccf2de6152bdac9f013f474bb80d339efe3a2dd58",
    productName: "T-Fast-sigs",
    Brand: "Luxicery",
    quantity: "2",
    price: "230$",
  },

  {
    image:
      "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?w=360&t=st=1707120712~exp=1707121312~hmac=df60971a6a67dae1382b062ccf2de6152bdac9f013f474bb80d339efe3a2dd58",
    productName: "T-Fast-sigs",
    Brand: "Luxicery",
    quantity: "2",
    price: "230$",
  },
];

const Cart = () => {
  return (
    <div className="main_cart_page">
      <Grid container columnSpacing={6} columns={24}>
        <Grid item xl={16} lg={16}>
          <Card className="all_delete_item">
            <div>All Item Delete</div>
            <CustomButton text="Delete" startIcon={<DeleteIcon />} />
          </Card>

          <TableContainer component={Paper}>
            <Table
              className="table"
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell align="center">Product</TableCell>
                  <TableCell align="center">Brand</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img src={row.image} height={100} width={100} />
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                      {row.productName}
                    </TableCell>
                    <TableCell align="center">{row.Brand}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>

                    <TableCell align="center">{row.quantity}</TableCell>
                    <TableCell align="center">
                      <CustomButton text="Delete" startIcon={<DeleteIcon />} />
                      {/* <DeleteIcon style={{ color: "red", cursor: "pointer" }} /> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xl={8} lg={8}>
          <Card className="summaryCard">
            <div className="summary">Summary</div>
            <div className="flex_div">
              <div>Total</div>
              <div className="subTotal_price">300$</div>
            </div>
            <div className="flex_div">
              <div>Shipping Fee</div>
              <div className="subTotal_price">120$</div>
            </div>
            <div className="flex_div">
              <div>Discount</div>
              <div className="subTotal_price">15%</div>
            </div>
            <div className="flex_div">
              <div>SubTotal</div>
              <div className="subTotal_price">300$</div>
            </div>
            <CustomButton
              text="Proccess to checkout"
              style={{ width: "100%", height: "50px", marginTop: "1rem" }}
            />
          </Card>
          <Card className="paymet_card">
            <div className="payment_txt">Payment</div>
            <div className={"payment_method"}>
              <img
                src="https://img.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png"
                height={50}
                width={60}
              />
              <img
                src="https://img.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png"
                height={50}
                width={60}
              />
              <img
                src="https://img.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png"
                height={50}
                width={60}
              />
              <img
                src="https://img.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png"
                height={50}
                width={60}
              />
              <img
                src="https://img.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png"
                height={50}
                width={60}
              />
            </div>
            <div className="payment_txt">
              Buyer protection
              <div className="protect_payment">
                <span>
                  <VerifiedUserIcon style={{ color: "green" }} />
                </span>
                <div>
                  Get full refund if the item is not as described or if is not
                  delivered
                </div>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
