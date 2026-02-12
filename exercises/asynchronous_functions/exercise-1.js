function getCurrentTimeString() {
  const now = Date.now();
  return new Date(now).toLocaleTimeString();
}
