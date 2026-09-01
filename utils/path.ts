export const getBasePath = (): string => {
  if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  if (typeof process !== "undefined" && process.env.GITHUB_REPOSITORY) {
    return `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`;
  }
  return "";
};

export const getAssetPath = (path: string): string => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  const basePath = getBasePath();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${cleanPath}`;
};
