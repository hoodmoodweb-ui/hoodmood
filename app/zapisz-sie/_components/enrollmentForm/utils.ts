export const sanitizeNameInput = (value: string) =>
  value.replace(/[^\p{L}\s-]/gu, "");
