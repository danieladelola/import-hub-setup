import { createClient } from "@supabase/supabase-js";

// External Supabase project (manually configured — bypasses Lovable Cloud).
const SUPABASE_URL = "https://tcvwysqgwlnvpmidupqi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_G_OVo3KxlUOqeUgRImKIRQ_ZFFAZvKv";

const isBrowser = typeof window !== "undefined";

// Untyped client: the local types.ts is empty (it tracks the Cloud project, not
// this external one), so we drop the Database generic to avoid hundreds of
// "never" type errors on .from()/.rpc() calls.
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: isBrowser ? window.localStorage : undefined,
    persistSession: isBrowser,
    autoRefreshToken: isBrowser,
  },
});
