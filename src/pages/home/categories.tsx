import React from "react";
const categories = [
  "Groceries & Pets",
  "Health & Beauty",
  "Women's Fashion",
  "Electronic Devices",
  "Automotive & Motorbike",
  "Laundry & Household",
  "Sports & Outdoor",
];

const Categories = () => {
  return (
    <div className="categories">
      {categories?.map((item) => (
        <div className="categories-item">{item}</div>
      ))}
    </div>
  );
};

export default Categories;
