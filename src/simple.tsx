import React, { useRef } from "react";
import { Grid, styled } from "@mui/material";
import "./style.scss";
import { GoPaperclip } from "react-icons/go";
import CustomButton from "./componenets/@commonComponent/custombtn";

const Simple = () => {
  const fileInputRef: any = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <Grid container columns={24}>
        <Grid className="box-1" item xl={8} lg={8}>
          <h1>Choose File</h1>
          <div className="choose_file">
            <div onClick={handleClick}>Choose File</div>
            <div onClick={handleClick}>
              <GoPaperclip />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => {}}
            />
          </div>
          <div>
            <div>No File Selected</div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam
            rem corrupti corporis natus culpa beatae,
          </div>
        </Grid>
        <Grid className="box-2" item xl={16} lg={16}>
          <div>Instructions</div>
          <ul className="list">
            <li>
              Download the Sample File <CustomButton text="Download" />
            </li>
            <li>File in the detail of the vendors in the download file.</li>
            <li>Upload the Field File using the form below</li>
          </ul>
          <div>
            <CustomButton text="Import" />
            <CustomButton text="Cancel" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Simple;
