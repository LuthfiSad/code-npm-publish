export const logSuccess = (message) => {
  console.log("\x1b[32m%s\x1b[0m", message); // Warna hijau untuk pesan sukses
};

export const logError = (message, error) => {
  console.error("\x1b[31m%s\x1b[0m", message, error); // Warna merah untuk pesan error
};
