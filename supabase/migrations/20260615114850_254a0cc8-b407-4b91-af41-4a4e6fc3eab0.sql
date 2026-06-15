CREATE TABLE public.contact_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 1 AND 30),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  question TEXT NOT NULL CHECK (char_length(question) BETWEEN 1 AND 2000),
  lang TEXT NOT NULL DEFAULT 'pt' CHECK (lang IN ('pt','en')),
  source TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_questions TO anon, authenticated;
GRANT ALL ON public.contact_questions TO service_role;

ALTER TABLE public.contact_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a question"
  ON public.contact_questions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX contact_questions_created_at_idx ON public.contact_questions (created_at DESC);