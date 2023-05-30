import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem, { listItemClasses } from "@mui/joy/ListItem";
import { listItemButtonClasses } from "@mui/joy/ListItemButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import ReceiptLong from "@mui/icons-material/ReceiptLong";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const edu = [
  {
    title: "MCA",
    class: "Master of Computer Applications",
    start: "2021",
    end: "2023",
    college: "Mandsaur University - Mandsaur, MADHYA PRADESH",
    per: "70%",
  },
  {
    title: "BCA",
    class: "Bachelor of Computer Applications",
    start: "2018",
    end: "2021",
    college: "Vikram University - Mandsaur, BHOPAL, MADHYA PRADESH",
    per: "71.07%",
  },
  {
    title: "12th",
    class: "12th PCM",
    start: "2017",
    end: "2018",
    college: "Subhash English School - Mandsaur",
    per: "58%",
  },
  {
    title: "10th",
    class: "10th MP Bord",
    start: "2015",
    end: "2016",
    college: "Subhash English School - Mandsdaur",
    per: "69%",
  },
];

const Project = [
  {
    lable: "Herookie",
    title: "Herookie (Social Networking Website)",
    DataBase: "MySQL",
    front: "HTML, CSS , Javascript",
    back: "PHP",
  },
];

export default function ExampleCollapsibleList() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        margin: "50px",
        justifyContent: "space-between",
        alignItems: "top",
        width: 320,
        color: "rgb(0,255,164)",
        pl: "24px",
      }}
    >
      <List
        size='sm'
        sx={(theme) => ({
          // Gatsby colors
          "--joy-palette-primary-plainColor": "rgb(0,255,164)",
          "--joy-palette-neutral-plainHoverBg": "transparent",
          "--joy-palette-neutral-plainActiveBg": "transparent",
          "--joy-palette-primary-plainHoverBg": "transparent",
          "--joy-palette-primary-plainActiveBg": "transparent",
          [theme.getColorSchemeSelector("dark")]: {
            "--joy-palette-text-secondary": "#fff",
            "--joy-palette-primary-plainColor": "rgb(0,255,164)",
          },

          "--List-insetStart": "32px",
          "--ListItem-paddingY": "0px",
          "--ListItem-paddingRight": "16px",
          "--ListItem-paddingLeft": "21px",
          "--ListItem-startActionWidth": "0px",
          "--ListItem-startActionTranslateX": "-50%",

          [`& .${listItemButtonClasses.root}`]: {
            borderLeft: "1px solid",
            borderColor: "rgb(0,255,164)",
          },
          [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]:
            {
              borderColor: "rgb(0,255,164)",
            },
          [`& .${listItemClasses.nested} > .${listItemButtonClasses.root}`]: {
            border: "rgb(0,255,164)",
          },
          '& [class*="startAction"]': {
            color: "rgb(0,255,164)",
          },
        })}
      >
        <ListItem nested>
          <ListItem component='div' startAction={<ReceiptLong />}>
            <Typography
              level='body2'
              sx={{ color: "rgb(166,104,255)", textTransform: "uppercase" }}
            >
              Education
            </Typography>
          </ListItem>
          <List sx={{ "--List-gap": "0px" }}></List>
        </ListItem>
        {edu.map((val) => (
          <ListItem
            nested
            sx={{ my: 1 }}
            startAction={
              <IconButton
                variant='plain'
                size='sm'
                color='neutral'
                onClick={() => setOpen(!open)}
              >
                <KeyboardArrowDown
                  sx={{
                    color: "rgb(0,255,164)",
                    transform: open ? "initial" : "rotate(-90deg)",
                  }}
                />
              </IconButton>
            }
          >
            <ListItem>
              <Typography
                level='inherit'
                sx={{
                  fontWeight: open ? "bold" : undefined,
                  color: "rgb(166,104,255)",
                }}
              >
                {val.title}
              </Typography>
            </ListItem>
            {open && (
              <List sx={{ "--ListItem-paddingY": "8px" }}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 12 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      {val.college}
                      {" - "}
                      <b>{val.per}</b>
                    </Typography>
                    <Typography
                      sx={{ marginY: "10px" }}
                      bgcolor={"rgb(166,104,255)"}
                      variant='solid'
                    >
                      {val.class}
                    </Typography>
                    <Typography>
                      {val.start}
                      {" / "}
                      {val.end}
                    </Typography>
                  </CardContent>
                </Card>
              </List>
            )}
          </ListItem>
        ))}
      </List>
      <List
        size='sm'
        sx={(theme) => ({
          // Gatsby colors
          "--joy-palette-primary-plainColor": "rgb(0,255,164)",
          "--joy-palette-neutral-plainHoverBg": "transparent",
          "--joy-palette-neutral-plainActiveBg": "transparent",
          "--joy-palette-primary-plainHoverBg": "transparent",
          "--joy-palette-primary-plainActiveBg": "transparent",
          [theme.getColorSchemeSelector("dark")]: {
            "--joy-palette-text-secondary": "#fff",
            "--joy-palette-primary-plainColor": "rgb(0,255,164)",
          },

          "--List-insetStart": "32px",
          "--ListItem-paddingY": "0px",
          "--ListItem-paddingRight": "16px",
          "--ListItem-paddingLeft": "21px",
          "--ListItem-startActionWidth": "0px",
          "--ListItem-startActionTranslateX": "-50%",

          [`& .${listItemButtonClasses.root}`]: {
            borderLeft: "1px solid",
            borderColor: "rgb(0,255,164)",
          },
          [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]:
            {
              borderColor: "rgb(0,255,164)",
            },
          [`& .${listItemClasses.nested} > .${listItemButtonClasses.root}`]: {
            border: "rgb(0,255,164)",
          },
          '& [class*="startAction"]': {
            color: "rgb(0,255,164)",
          },
        })}
      >
        <ListItem nested>
          <ListItem component='div' startAction={<ReceiptLong />}>
            <Typography
              level='body2'
              sx={{ color: "rgb(166,104,255)", textTransform: "uppercase" }}
            >
              Project
            </Typography>
          </ListItem>
          <List sx={{ "--List-gap": "0px" }}></List>
        </ListItem>
        {Project.map((val) => (
          <ListItem
            nested
            sx={{ my: 1 }}
            startAction={
              <IconButton
                variant='plain'
                size='sm'
                color='neutral'
                onClick={() => setOpen2(!open2)}
              >
                <KeyboardArrowDown
                  sx={{
                    color: "rgb(0,255,164)",
                    transform: open2 ? "initial" : "rotate(-90deg)",
                  }}
                />
              </IconButton>
            }
          >
            <ListItem>
              <Typography
                level='inherit'
                sx={{
                  fontWeight: open2 ? "bold" : undefined,
                  color: "rgb(166,104,255)",
                }}
              >
                {val.lable}
              </Typography>
            </ListItem>
            {open2 && (
              <List sx={{ "--ListItem-paddingY": "8px" }}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 12 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      {val.title}
                    </Typography>
                    <Typography variant='body3' sx={{ fontSize: 12 }}>
                      {`DataBase -`}
                      {val.DataBase}
                    </Typography>
                    <Typography variant='body3' sx={{ fontSize: 12 }}>
                      {`Front-end -`}
                      {val.front}
                    </Typography>
                    <Typography variant='body3' sx={{ fontSize: 12 }}>
                      {`Back-end -`}
                      {val.back}
                    </Typography>
                  </CardContent>
                </Card>
              </List>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
