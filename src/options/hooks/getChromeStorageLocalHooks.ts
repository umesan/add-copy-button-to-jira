import useSWR from "swr";
import { EXTENSION_ID } from "../../content_script/constants";

type ChromeStorageLocalKeyType = "type" | "show";

export const useGetChromeStorageLocal = (
  storageLocalKey: ChromeStorageLocalKeyType
) => {
  const { data } = useSWR(getKey(storageLocalKey), fetcher, {
    suspense: true,
  });
  return data;
};

const getKey = (storageLocalKey: ChromeStorageLocalKeyType) => {
  return {
    key: `${EXTENSION_ID}-${storageLocalKey}`,
    storageLocalKey,
  };
};

const fetcher = async ({
  storageLocalKey,
}: ReturnType<typeof getKey>): Promise<{ [key: string]: any }> => {
  const result = await chrome.storage.local.get(storageLocalKey);
  return result;
};
