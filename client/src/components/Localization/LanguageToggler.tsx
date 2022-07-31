import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Box, MenuItem, Select } from "@mui/material";

function LanguageToggler() {
  const { i18n, t } = useTranslation(["Home"]);

	useEffect(() => {
		// @ts-ignore
		if (localStorage.getItem("i18nextLng")?.length > 1) {
			i18next.changeLanguage("en");
		}
	}, []);

	const handleLanguageChange = (e:any) => {
		i18n.changeLanguage(e.target.value);
	};

  return (
    <Box sx={{display: 'flex', justifyContent: ""}}>
      <Select labelId="demo-simple-select-label" id="demo-simple-select"  value={localStorage.getItem("i18nextLng") || ''} onChange={handleLanguageChange}>
				<MenuItem value="en">{t("lan1")}</MenuItem>
				<MenuItem value="ar">{t("lan2")}</MenuItem>
			</Select>
    </Box>
  )
}

export default LanguageToggler