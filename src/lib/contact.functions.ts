import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(8).max(30).regex(/^[0-9()+\-\s]+$/),
  email: z.string().trim().email().max(255),
  question: z.string().trim().min(3).max(2000),
  lang: z.enum(["pt", "en"]).default("pt"),
  source: z.string().trim().max(120).optional(),
});

export const saveContactQuestion = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => schema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );
    const { error } = await supabaseAdmin
      .from("contact_questions")
      .insert({
        name: data.name,
        phone: data.phone,
        email: data.email,
        question: data.question,
        lang: data.lang,
        source: data.source ?? null,
      });
    if (error) {
      console.error("[contact_questions] insert failed", error.message);
      return { ok: false as const, error: "insert_failed" };
    }
    return { ok: true as const };
  });
