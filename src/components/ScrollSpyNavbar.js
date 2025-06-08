import { SECTIONS } from "@/constant";
import { Box, Button } from "@mui/material";


export default function ScrollSpyNavbar({ activeTab, isSticky, onTabClick }) {
return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 1,
        position: isSticky ? 'fixed' : 'relative',
        top: isSticky ? 0 : 'auto',
        left: 0,
        right: 0,
        background: isSticky ?  '#111' : 'transparent',
        py: 1,
        px: 1,
        width: '100%',
        zIndex: 1000,
        boxShadow: isSticky ? '0 2px 6px rgba(0,0,0,0.3)' : 'none',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          gap: 1,
          whiteSpace: 'nowrap',
        }}
      >
        {SECTIONS.map((tab, index) => (
        <Button
          id={`header-${tab.toLowerCase()}`}
          onClick={() => onTabClick(index)}
          sx={{
            color: activeTab === index ? 'primary.main' : 'white',
            fontWeight: activeTab === index ? 'bold' : 'normal',
            flexShrink: 1,
            mx: 1, 
            px: 1,
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            minWidth: 'fit-content',
          }}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </Button>
      ))}
      </Box>
    </Box>
  );
}