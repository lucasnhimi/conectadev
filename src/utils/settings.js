export function getSettings() {
  let settings = null;

  const data = localStorage.getItem('settings');

  if (data) {
    settings = JSON.parse(data);
  }

  return settings;
}

export function setSettings(settings) {
  localStorage.setItem('settings', JSON.stringify(settings));
}
