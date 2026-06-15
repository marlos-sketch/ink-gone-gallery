DROP POLICY IF EXISTS "Anyone can submit a question" ON public.contact_questions;
REVOKE INSERT ON public.contact_questions FROM anon, authenticated;