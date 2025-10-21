import { useCallback } from "react";
import { Linking, Alert } from "react-native";
import { getInstagramLinks } from "../services/instagramService";

export function useInstagram() {
  const openInstagram = useCallback(async () => {
    const { appUrl, webUrl } = getInstagramLinks("fatec_jacarei");

    try {
      const supported = await Linking.canOpenURL(appUrl);
      if (supported) {
        await Linking.openURL(appUrl);
      } else {
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir o Instagram.");
    }
  }, []);

  return { openInstagram };
}
