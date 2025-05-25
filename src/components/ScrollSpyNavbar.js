import { SECTIONS } from "@/constant";
import { Box, Button } from "@mui/material";


export default function ScrollSpyNavbar({ activeTab, isSticky, onTabClick }) {
return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        position: isSticky ? 'fixed' : 'relative',
        top: isSticky ? 0 : 'auto',
        left: 0,
        right: 0,
        background: isSticky ? '#111' : 'transparent',
        py: 1,
        px: 2,
        width: '100%',
        zIndex: 1000,
        boxShadow: isSticky ? '0 2px 6px rgba(0,0,0,0.3)' : 'none',
        overflowX: 'auto',
      }}
    >
      {SECTIONS.map((tab, index) => (
        <Button
          key={tab}
          onClick={() => onTabClick(index)}
          sx={{
            color: activeTab === tab ? 'primary.main' : 'white',
            fontWeight: activeTab === tab ? 'bold' : 'normal',
          }}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </Button>
      ))}
    </Box>
  );
}