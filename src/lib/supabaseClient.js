import { createClient } from '@supabase/supabase-js';
// @ts-ignore
import { PUBLIC_SUPABASE_ANNON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANNON_KEY);
