import { useCallback } from "react";
import { Linking, Alert } from "react-native";
import { getYoutubeLinks } from "../services/youtubeService";

export function useYoutube() {
  const openYoutube = useCallback(async () => {
    const { appUrl, webUrl } = getYoutubeLinks("dQw4w9WgXcQ"); // ID do vídeo

    try {
      const supported = await Linking.canOpenURL(appUrl);
      if (supported) {
        await Linking.openURL(appUrl);
      } else {
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir o YouTube.");
    }
  }, []);

  return { openYoutube };
}
