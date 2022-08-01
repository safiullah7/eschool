import { useTranslation } from "react-i18next";
import { Box, MenuItem, Select } from "@mui/material";

function LanguageToggler() {
  const { i18n, t } = useTranslation(["Home"]);

	const handleLanguageChange = (e:any) => {
		i18n.changeLanguage(e.target.value);
		localStorage.setItem('i18nextLng', String(e.target.value));
	};

  return (
    <Box sx={{display: 'flex', padding: "0px 0px 0 20px"}}>
      <Select  value={localStorage.getItem("i18nextLng") || ''} onChange={handleLanguageChange}>
				<MenuItem value="en">{t("lan1")}</MenuItem>
				<MenuItem value="ar">{t("lan2")}</MenuItem>
			</Select>
    </Box>
  )
}

export default LanguageToggler