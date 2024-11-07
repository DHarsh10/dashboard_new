import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const menuItems = [
  { label: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
  {
    label: "Data",
    type: "title",
  },
  { label: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
  {
    label: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    label: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
  {
    label: "Pages",
    type: "title",
  },
  { label: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
  {
    label: "Calendar",
    icon: <CalendarTodayOutlinedIcon />,
    path: "/calendar",
  },
  { label: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
  {
    label: "Charts",
    type: "title",
  },
  { label: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
  { label: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
  { label: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
  { label: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
];
