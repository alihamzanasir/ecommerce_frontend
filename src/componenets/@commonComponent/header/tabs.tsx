import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";

export default function TabsPricingExample() {
  return (
    <Tabs
      variant="outlined"
      aria-label="Pricing plan"
      defaultValue={0}
      sx={{
        width: 343,
        boxShadow: "sm",
        overflow: "auto",
        bgcolor: "unset",
      }}
    >
      <TabList
        disableUnderline
        tabFlex={1}
        sx={{
          bgcolor: "unset",
          [`& .${tabClasses.root}`]: {
            fontSize: "16px",
            fontWeight: "lg",
            [`&[aria-selected="true"]`]: {
              color: "primary.500",
              bgcolor: "background.surface",
            },
            [`&.${tabClasses.focusVisible}`]: {
              outlineOffset: "-4px",
            },
          },
        }}
      >
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Community
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Pro
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Premium
        </Tab>
      </TabList>
    </Tabs>
  );
}
