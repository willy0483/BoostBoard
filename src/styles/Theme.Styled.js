export const theme = {
  color: {
    white: "#F5F5F5",            // Soft white for better readability
    black: "#0D0D0D",            // Deep black for contrast
    background: "#121212",       // Deep dark background (unchanged)
    surface: "#1E1E1E",          // Card/section backgrounds (unchanged)
    primary: "#00D1D9",          // Brighter cyan/teal for more vibrancy
    secondary: "#2E333A",        // Slightly lighter dark grey for better contrast
    accent: "#FF6B35",           // Warmer orange for a more energetic feel
    red: "#E74C3C",              // Brighter red for alerts/errors
    green: "#2ECC71",            // Fresh green for success
    yellow: "#F39C12",           // Golden yellow for warnings
    grey: "#B0B0B0",             // Light grey for subtle text/icons
    mutedText: "#888888",        // Slightly brighter muted text for better readability
  },
  fonts: ["Poppins", "Open Sans"],
  grid: {
    breakpoints: {
      xs: "320px",
      s: "480px",
      m: "768px",
      l: "992px",
      xl: "1200px",
    },
    mobile: {
      primary: {
        rows: "1fr 9fr 1fr",
        columns: "1fr",
        areas: `
                "header"
                "main"
                "footer"
            `,
      },
    },
    tablet: {
      primary: {
        rows: "1fr 10fr 1fr",
        columns: "1fr 5fr",
        areas: `
                "sidebar main"
                "sidebar main"
                "footer footer"
            `,
      },
    },
    desktop: {
      primary: {
        rows: "1fr 10fr 1fr",
        columns: "1fr 5fr",
        areas: `
                "sidebar main"
                "sidebar main"
                "footer footer"
            `,
      },
    },
  },
};

export default theme;