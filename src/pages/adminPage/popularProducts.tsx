import MTextFied from "../../componenets/textField";

import InputFileUpload from "./upload";

const PopularProducts = () => {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <div style={{ margin: "2rem" }}>
      <div className="title">
        Popular <span>Products</span>
      </div>
      <div className="flex_div">
        <MTextFied
          id="outlined-basic"
          label="product Name"
          variant="outlined"
        />
        <MTextFied id="outlined-basic" label="Quantity " variant="outlined" />
        <MTextFied id="outlined-basic" label="Amount" variant="outlined" />
        <MTextFied
          id="outlined-select-currency-native"
          select
          label="Please Select"
          defaultValue="USD"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </MTextFied>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <MTextFied
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue="about product"
        />
        <InputFileUpload />
      </div>
    </div>
  );
};

export default PopularProducts;
