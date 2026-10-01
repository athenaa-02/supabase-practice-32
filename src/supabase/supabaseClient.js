import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ybluyoptgkqklkbkfvyw.supabase.co";
const supabasePublishableKey = "sb_publishable_iwPb-JZEsBlmZoK9sbEQzQ_X-z3iG0T";

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
