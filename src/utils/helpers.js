export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateRequired = (value) => {
  return value.trim().length > 0;
};

export const toSlug = (text) => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
};