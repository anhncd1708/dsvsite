import { useState } from "react";

import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";
import flagEN from "../../../assets/icons/ic_flag_en.svg";
import flagVN from "../../../assets/icons/ic_flag_vn.svg";

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: "en",
    label: "English",
    icon: flagEN,
  },
  {
    value: "vn",
    label: "Tiếng Việt",
    icon: flagVN,
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const [open, setOpen] = useState(null);
  const [t, i18n] = useTranslation("global");
  const [currentLang, setCurrentLang] = useState(LANGS[0]);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = (e) => {
    setOpen(null);
  };

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang.value);
    setCurrentLang(lang);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(open && {
            bgcolor: "action.selected",
          }),
        }}
      >
        <img src={currentLang.icon} alt={currentLang.label} />
      </IconButton>

      <Popover
        className="fixed top-0"
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 180,
          },
        }}
      >
        {LANGS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === currentLang.value}
            onClick={() => {
              handleChangeLanguage(option);
              handleClose();
            }}
            sx={{ typography: "body2", py: 1 }}
          >
            <Box
              component="img"
              alt={option.label}
              src={option.icon}
              sx={{ width: 28, mr: 2 }}
            />
            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
