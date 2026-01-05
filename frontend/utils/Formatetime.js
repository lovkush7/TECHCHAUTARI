 export const Formatmessagetime = (time) => {
   if (!time) return "";

  const date = new Date(time);
  if (isNaN(date.getTime())) return "";

  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};
