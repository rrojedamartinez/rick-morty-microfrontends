export function logInfo(event, data = {}) {
  console.info(
    JSON.stringify({
      level: "info",
      event,
      ...data,
    }),
  );
}

export function logError(event, error) {
  console.error(
    JSON.stringify({
      level: "error",
      event,
      message: error.message,
    }),
  );
}
