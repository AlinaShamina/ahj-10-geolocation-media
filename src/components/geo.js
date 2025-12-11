export function getPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) =>
        resolve({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        }),
      () => reject("Denied")
    );
  });
}
