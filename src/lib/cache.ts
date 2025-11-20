import { unstable_cache as nextCache } from "next/cache";
import { cache as reachCache } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Callback = (...args: any[]) => Promise<any>;

export function cache<T extends Callback>(
  cb: T,
  KeyParts: string[],
  options: { revalidate?: number | false; tags?: string[] }
) {
  return nextCache(reachCache(cb), KeyParts, options);
}
