export const colorTokens = {
    drops: {
      100: "#eef6f6",
      150: "#ddecee",
      200: "#cde5e5",
      300: "#89bec2",
      400: "#78b4ba",
      500: "#68abb1",
      600: "#346165",
      700: "#2b5154",
      800: "#234143",
      850:"#1a3032",
      900: "#112022",
      1000: "#091011"
    },
  };
  
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              text: {
                main: colorTokens.drops[300],
                mid: colorTokens.drops[200],
                low: colorTokens.drops[100],
                high: colorTokens.drops[900],
                title: colorTokens.drops[200]
              },
              background: {
                high: colorTokens.drops[900],
                mid: colorTokens.drops[300],
                low: colorTokens.drops[150],
              },
              shadow: {
                main: "rgba(255, 255, 255, 0.35)",
                sub: "rgba(255, 255, 255, 0.25)",
              },
              error: {
                main: "#FF5733",
              },
              placeholder: {
                main: "#999999",
              },
            }
          : {
              // palette values for light mode
              text: {
                main: colorTokens.drops[700],
                mid: colorTokens.drops[500],
                low: colorTokens.drops[400],
                high: colorTokens.drops[150],
                title: colorTokens.drops[100],
              },
              background: {
                high: colorTokens.drops[100],
                mid: colorTokens.drops[900],
                low: colorTokens.drops[700],
              },
              shadow: {
                main: "rgba(0, 0, 0, 0.35)",
                sub: "rgba(0, 0, 0, 0.25)",
              },
              error: {
                main: "#FF5733",
              },
              placeholder: {
                main: "#666666",
              },
            }),
      },
    };
  };
  