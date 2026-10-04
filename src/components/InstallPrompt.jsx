import React, { useEffect, useState } from "react";
import { useApp } from "../context/AppContext.jsx";

/**
 * Renders an "Install App" pill only when the browser has signalled the
 * site is installable (via the beforeinstallprompt event — supported on
 * Chromium-based browsers, including Chrome for Android). On iOS Safari,
 * which never fires this event, the button simply never appears, which
 * is the correct/expected behaviour — iOS users add to home screen via
 * the native Share sheet instead.
 */
export default function InstallPrompt() {
  const { t } = useApp();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const onBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    const onInstalled = () => {
      setInstalled(true);
      setDeferredPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (!deferredPrompt || installed) return null;

  const handleInstall = async () => {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
  };

  return (
    <button className="pill install-pill" onClick={handleInstall}>
      {t.installApp}
    </button>
  );
}
